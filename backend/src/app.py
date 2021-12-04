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

if __name__ == '__main__':
    app.run()