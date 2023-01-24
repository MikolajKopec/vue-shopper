from sqlalchemy import Boolean,Column,ForeignKey,Integer,String
from sqlalchemy.orm import relationship
from database.connecton import Base
from database.models.item import Item

class User(Base):
    __tablename__= "users"
    id = Column(Integer,primary_key = True,index = True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)