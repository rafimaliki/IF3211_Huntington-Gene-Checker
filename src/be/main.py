from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from kmp import count_max_contiguous_cag_repeats, determine_huntington_risk
import re

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class DNASeqRequest(BaseModel):
    dna_sequence: str

@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI!"}

@app.post("/cag_repeats")
def get_cag_repeats(request: DNASeqRequest):
    dna_sequence = re.sub(r'[^ATGC]', '', request.dna_sequence.upper())
    max_repeats = count_max_contiguous_cag_repeats(dna_sequence)
    risk = determine_huntington_risk(max_repeats)
    return {"max_repeats": max_repeats, "risk": risk}