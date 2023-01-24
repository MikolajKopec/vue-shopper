from typing import List

from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

from database.connecton import SessionLocal,engine
from database.schemas.user import UserCreate,User
from database.schemas.item import Item,ItemCreate,ItemUpdateFull
from database.crud.user import get_user_by_email,create_new_user
from database.crud.item import get_items,create_user_item,get_item_by_id,update_existing_item

from database.models.user import Base
Base.metadata.create_all(bind=engine)
app = FastAPI()


from fastapi.middleware.cors import CORSMiddleware
origins = [
    "http://localhost:8080"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/users/", response_model=User)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return create_new_user(db=db, user=user)

@app.post("/items/",response_model=Item)
def create_item(item:ItemCreate,db:Session = Depends(get_db)):
    return create_user_item(item=item,db=db)

@app.get("/items/")
def get_all_items(db:Session = Depends(get_db)):
    return get_items(db=db)

@app.get("/items/{item_id}")
def get_item(item_id:str,db:Session = Depends(get_db)):
    return get_item_by_id(db=db,item_id=item_id)

@app.put("/items/",response_model=Item)
def update_item(item:ItemUpdateFull,db:Session = Depends(get_db)):
    return update_existing_item(db=db,item=item)