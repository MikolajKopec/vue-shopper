import database.models.item as model_item
import database.schemas.item as schema_item
from sqlalchemy.orm import Session

def get_items(db: Session, skip: int = 0, limit: int = 100):
    return db.query(model_item.Item).offset(skip).limit(limit).all()

def create_user_item(db: Session, item: schema_item.ItemCreate):
    db_item = model_item.Item(**item.dict())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item
    
def get_item_by_id(db: Session,item_id:int):
    return db.query(model_item.Item).get(item_id)

def update_existing_item(db:Session,item:schema_item.ItemUpdateFull):
    print(item)
    old_item = db.query(model_item.Item).filter(model_item.Item.id == item.id).one_or_none()
    if old_item is None:
        return None
    for var, value in vars(item).items():
        setattr(old_item, var, value)
    db.commit()
    db.refresh(old_item)
    return old_item