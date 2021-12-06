import datetime
from flask import Flask, request, jsonify, render_template
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from models import db, User, Profile, Role, RoleUser


app = Flask(__name__)
app.url_map.strict_slashes = False
app.config['DEBUG'] = True
app.config['ENV'] = 'development'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['JWT_SECRET_KEY'] = '455a0595071af6e2385c0ec556cb329c'
db.init_app(app)
Migrate(app, db) #db init, db migrate, db upgrade, db downgrade
jwt = JWTManager(app)
CORS(app)

@app.route('/')
def main():
    return render_template('index.html')

@app.route('/api/users', methods=['GET', 'POST'])
def users():
    if request.method == 'GET':
        users= User.query.all()
        users=list(map(lambda user: user.serialize_with_roles(),users))
        return jsonify(users), 200

    if request.method == 'POST':
        rut= request.json.get("rut")
        password= request.json.get("password")
        names= request.json.get("names", "")
        mother_lastname= request.json.get("mother lastname", "" )
        father_lastname= request.json.get("father lastname", "" )
        region= request.json.get("region", "")
        email= request.json.get("email")
        roles= request.json.get("roles", [2])
        phone= request.json.get("phone")

        user_exist = User.query.filter_by(rut=rut).first()
        if user_exist: return jsonify({"error": "el usuario ya existe!"}), 400

        user = User()
        user.rut = rut
        user.password = generate_password_hash(password)
        user.active = True
        
        
        profile = Profile()
        profile.names = names
        profile.rut = rut
        profile.mother_lastname = mother_lastname
        profile.father_lastname = father_lastname
        profile.region = region
        profile.email = email
        profile.phone = phone
        #profile.user_id = user.id
        #profile.save()

        for role in roles:
            role= Role.query.get(role)
            user.roles.append(role)

        user.profile= profile
        user.save()

        return jsonify(user.serialize_with_roles()), 201

@app.route("/api/login", methods=['POST'])
def login():
        rut= request.json.get("rut")
        password= request.json.get("password")
        names= request.json.get("names", "")
        mother_lastname= request.json.get("mother lastname", "" )
        father_lastname= request.json.get("father lastname", "" )
        region= request.json.get("region", "")
        email= request.json.get("email")
        roles= request.json.get("roles", [2])
        phone= request.json.get("phone")

        user_exist = User.query.filter_by(rut=rut).first()
        if not user_exist: return jsonify({"msg": "rut/password son incorrectos"}), 400

        if not check_password_hash(user_exist.password, password):
            return jsonify({"msg": "rut/password son incorrectos"}), 400

        expires = datetime.timedelta(days=1)

        accesses_token = create_access_token(identity=user_exist.id, expires_delta = expires)

        data = {
            "access_token": accesses_token,
            "user": user_exist.serialize()
        }

        return jsonify(data),200

@app.route("/api/register", methods=['POST'])
def register():
    if request.method == 'POST':
        rut= request.json.get("rut")
        password= request.json.get("password")
        names= request.json.get("names", "")
        mother_lastname= request.json.get("mother lastname", "" )
        father_lastname= request.json.get("father lastname", "" )
        region= request.json.get("region", "")
        email= request.json.get("email")
        roles= request.json.get("roles", [2])
        phone= request.json.get("phone")

        user_exist = User.query.filter_by(rut=rut).first()
        if user_exist: return jsonify({"error": "el usuario ya existe!"}), 400

        user = User()
        user.rut = rut
        user.password = generate_password_hash(password)
        user.active = True
        
        
        profile = Profile()
        profile.names = names
        profile.rut = rut
        profile.mother_lastname = mother_lastname
        profile.father_lastname = father_lastname
        profile.region = region
        profile.email = email
        profile.phone = phone
        #profile.user_id = user.id
        #profile.save()

        for role in roles:
            role= Role.query.get(role)
            user.roles.append(role)

        user.profile= profile
        user.save()
    

        if not user: jsonify({"msg": "Registro fallido"}), 400

        expires = datetime.timedelta(days=1)

        accesses_token = create_access_token(identity=user.id, expires_delta = expires)

        data = {
            "access_token": accesses_token,
            "user": user.serialize()
        }

        return jsonify(data),200

@app.route("/api/profile", methods=['GET'])
@jwt_required()
def profile():
    id = get_jwt_identity()
    user = User.query.get(id)
    return jsonify(user.serialize()), 200

if __name__ == '__main__':
    app.run()