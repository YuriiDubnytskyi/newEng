import axios from "axios"
import {IaddBook} from "../interfaces/IaddBook";
import {IaddUnits} from "../interfaces/IaddUnits";
import {IaddWords} from "../interfaces/IaddWords";

export const getAdmin = (name:string,password:number) => axios.get("/admin/"+name+"/"+password);

export const getBooks = () => axios.get("/books");

export const getUnit = (key:number) => axios.get("/units/"+key);

export const getWord = (key:number) => axios.get("/words/"+key);

export const putBook = (addBook:IaddBook) => axios.put("/addBook",addBook);

export const postUnits = (data:IaddUnits) => axios.post("/addUnits",data);

export const putWords = (data:IaddWords) => axios.put("/addWords",data);

export const getWordTranslate = (word:string) => axios.get("https://translate.yandex.net/api/v1.5/tr.json/translate?lang=uk&key=trnsl.1.1.20190518T054559Z.6098481762cecacb.6b721345d2262aa024e24b0aa7bbc42011422525&text=" + word + "&lang=uk&format=plain");
