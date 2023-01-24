from sqlalchemy import Boolean,Column,ForeignKey,Integer,String,Enum,Float
from sqlalchemy.orm import relationship
from database.connecton import Base
from api_utils.enums import Category


class Item(Base):
    __tablename__="items"
    id = Column(Integer,primary_key = True,index = True)
    name = Column(String, unique=True, index=True)
    category = Column(Enum(Category))
    price = Column(Float)
    description = Column(String)
    quantity = Column(Integer,default = 0)
    image_url = Column(String)