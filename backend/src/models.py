from flask_sqlalchemy import SQLAlchemy
db=SQLAlchemy()



class User(db.Model):
    __tablename__ = "users"
    id= db.Column(db.Integer, primary_key=True)
    usuario= db.Column(db.String(200), unique=True)
    password= db.Column(db.String(200))
    active = db.Column(db.Boolean, default=True)

class Profile(db.Model):
    __tablename__ = "profiles"
    id= db.Column(db.Integer, primary_key=True)
    names= db.Column(db.String(200))
    mother_lastname= db.Column(db.String(200))
    father_lastname= db.Column(db.String(200))
    rut= db.Column(db.String(200), nullable=False, unique=True)
    password= db.Column(db.String(200))
    region= db.Column(db.String(200))
    email= db.Column(db.String(200), nullable=False, unique=True)
    rol= db.Column(db.String(200))
    phone= db.Column(db.String(200))

class Role(db.Model):
    __tablename__ = "roles"
    id= db.Column(db.Integer, primary_key=True)
    name= db.Column(db.String(200), nullable= False, unique=True)

class RoleUser(db.Model):
    __tablename__ = "roles_users"
    role_id= db.Column(db.Integer, db.ForeignKey('roles.id'), primary_key=True)
    user_id= db.Column(db.Integer, db.ForeignKey('users.id'), primary_key=True)

class Pauta(db.Model):
    __tablename__= "pautas"
    id= db.Column(db.Integer, primary_key=True)
    categoria= db.Column(db.String(200), unique=True)

class Requerimiento(db.Model):
    __tablename__= "requerimientos"
    id= db.Column(db.Integer, primary_key=True)
    texto= db.Column(db.Text(500))
    seleccion= db.Column(db.Boolean, default=False)

class Resultado(db.Model):
    __tablename__= "resultados"
    id= db.Column(db.Integer, primary_key=True)
    texto= db.Column(db.Text(500))
    created_at= db.Column(db.timestamp)

class Supervision(db.Model):
    __tablename__= "supervisiones"
    id= db.Column(db.Integer, primary_key=True)
    text= db.Column(db.Text(500))
    created_at= db.Column(db.timestamp)

