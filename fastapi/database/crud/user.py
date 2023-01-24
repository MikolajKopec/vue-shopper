import database.models.user as model_user
import database.schemas.user as schema_user
from sqlalchemy.orm import Session

def get_user(db: Session, user_id: int):
    return db.query(model_user.User).filter(model_user.User.id == user_id).first()

def get_user_by_email(db: Session, email: str):
    return db.query(model_user.User).filter(model_user.User.email == email).first()

def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(model_user.User).offset(skip).limit(limit).all()

def create_new_user(db: Session, user: schema_user.UserCreate):
    fake_hashed_password = user.password + "notreallyhashed"
    db_user = model_user.User(email=user.email, hashed_password=fake_hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user