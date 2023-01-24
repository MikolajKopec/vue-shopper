from pydantic import BaseModel
from api_utils.enums import Category
class ItemBase(BaseModel):
    name:str
    price:int
    description:str | None = None
    category: Category | None = None
    quantity:int
    image_url:str | None = None

class ItemCreate(ItemBase):
    pass

class ItemUpdateFull(ItemBase):
    id:int

class Item(ItemBase):
    id:int
    class Config:
        orm_mode = True