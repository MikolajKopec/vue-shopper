from pydantic import BaseModel
from database.schemas.item import Item

    
class UserBase(BaseModel):
    email:str

class UserCreate(UserBase):
    password:str

class User(UserBase):
    id:int
    is_active = bool
    items_buyed:list[Item] = []
    class Config:
        orm_mode = True
