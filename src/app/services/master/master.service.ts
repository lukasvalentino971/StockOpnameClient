import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  //private url = `http://192.168.144.81:3121`;
  private url = `http://localhost:3121`;
  private production = 'https://myapps.aio.co.id/stock-opname-api'

  constructor(private HttpClient: HttpClient,) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  //Master Email User
  getEmailUser() {
    return this.HttpClient.get(`${this.url}/email-users`)
  }

  showEmailUser(id: any) {
    return this.HttpClient.get(`${this.url}/email-users/${id}`)
  }

  deleteEmailUser(id: any) {
    return this.HttpClient.delete(`${this.url}/email-users/${id}`)
  }

  createEmailUser(data: any) {
    return this.HttpClient.post(`${this.url}/email-users`, data)
  }

  updateEmailUser(data: any, id: any) {
    return this.HttpClient.put(`${this.url}/email-users/${id}`, data)
  }

  setAdmin(id: any, params: any) {
    return this.HttpClient.put(`${this.url}/email-users/setAdmin/${id}`, params)
  }

  showEmailUserByNik(nik: any) {
    return this.HttpClient.get(`${this.url}/email-users/showByNik/${nik}`)
  }



  // Master FinishGood
  getFG() {
    // console.log(`[SERVICE]`);
    return this.HttpClient.get(`${this.url}/finishGood`)
  }
  showFG(id: any) {
    return this.HttpClient.get(`${this.url}/finishGood/${id}`)
  }
  createFG(data: any) {
    return this.HttpClient.post(`${this.url}/finishGood`, data)
      .pipe(catchError(this.errorHttpHandler))
  }
  updateFG(id: any, data: any) {
    return this.HttpClient.put(`${this.url}/finishGood/${id}`, data)
  }
  deleteFG(id: any) {
    return this.HttpClient.delete(`${this.url}/finishGood/${id}`)
  }

  // Transaction FinishGood
  //this.url
  getTransactionFG(id: any) {
    return this.HttpClient.get(`${this.url}/trfg/findByFg/${id}`)
  }
  //this.url
  showTransactionFG(id: any) {
    return this.HttpClient.get(`${this.url}/trfg/${id}`)
  }
  //this.url
  createTransactionFG(data: any) {
    return this.HttpClient.post(`${this.url}/trfg`, data)
  }
  //this.url
  updateTransactionFG(id: any, data: any) {
    return this.HttpClient.put(`${this.url}/trfg/${id}`, data)
  }
  //this.url
  deleteTransactionFG(id: any) {
    return this.HttpClient.delete(`${this.url}/trfg/${id}`)
  }
  //this.url
  filterBydateFG(data: any) {
    return this.HttpClient.post(`${this.url}/trfg/filterBydate`, data)
  }

  // Master Material
  getMaterial() {
    return this.HttpClient.get(`${this.url}/material`)
  }
  showMaterial(id: any) {
    return this.HttpClient.get(`${this.url}/material/${id}`)
  }
  createMaterial(data: any) {
    return this.HttpClient.post(`${this.url}/material`, data)
  }
  updateMaterial(id: any, data: any) {
    return this.HttpClient.put(`${this.url}/material/${id}`, data)
  }
  deleteMaterial(id: any) {
    return this.HttpClient.delete(`${this.url}/material/${id}`)
  }

  // Transaction Material
  getTransactionMaterial(id: any) {
    return this.HttpClient.get(`${this.url}/trmaterial/findByMaterial/${id}`)
  }
  showTransactionMaterial(id: any) {
    return this.HttpClient.get(`${this.url}/trmaterial/${id}`)
  }
  createTransactionMaterial(data: any) {
    return this.HttpClient.post(`${this.url}/trmaterial`, data)
  }
  updateTransactionMaterial(id: any, data: any) {
    return this.HttpClient.put(`${this.url}/trmaterial/${id}`, data)
  }
  deleteTransactionMaterial(id: any) {
    return this.HttpClient.delete(`${this.url}/trmaterial/${id}`)
  }
  filterBydateMaterial(data: any) {
    return this.HttpClient.post(`${this.url}/trmaterial/filterBydate`, data)
  }

  // Master Packaging
  getPackaging() {
    return this.HttpClient.get(`${this.url}/packaging`)
  }
  showPackaging(id: any) {
    return this.HttpClient.get(`${this.url}/packaging/${id}`)
  }
  createPackaging(data: any) {
    return this.HttpClient.post(`${this.url}/packaging`, data)
  }
  updatePackaging(id: any, data: any) {
    return this.HttpClient.put(`${this.url}/packaging/${id}`, data)
  }
  deletePackaging(id: any) {
    return this.HttpClient.delete(`${this.url}/packaging/${id}`)
  }

  // Transaction Packaging
  getTransactionPackaging(id: any) {
    return this.HttpClient.get(`${this.url}/trpackaging/findByPackaging/${id}`)
  }
  showTransactionPackaging(id: any) {
    return this.HttpClient.get(`${this.url}/trpackaging/${id}`)
  }
  createTransactionPackaging(data: any) {
    return this.HttpClient.post(`${this.url}/trpackaging`, data)
  }
  updateTransactionPackaging(id: any, data: any) {
    return this.HttpClient.put(`${this.url}/trpackaging/${id}`, data)
  }
  deleteTransactionPackaging(id: any) {
    return this.HttpClient.delete(`${this.url}/trpackaging/${id}`)
  }
  filterBydatePackaging(data: any) {
    return this.HttpClient.post(`${this.url}/trpackaging/filterBydate`, data)
  }

  // Master Tools
  getTools() {
    return this.HttpClient.get(`${this.url}/tools`)
  }
  showTools(id: any) {
    return this.HttpClient.get(`${this.url}/tools/${id}`)
  }
  createTools(data: any) {
    return this.HttpClient.post(`${this.url}/tools`, data)
  }
  updateTools(id: any, data: any) {
    return this.HttpClient.put(`${this.url}/tools/${id}`, data)
  }
  deleteTools(id: any) {
    return this.HttpClient.delete(`${this.url}/tools/${id}`)
  }

  // Transaction Tools
  getTransactionTools(id: any) {
    return this.HttpClient.get(`${this.url}/trtools/findByTools/${id}`)
  }
  showTransactionTools(id: any) {
    return this.HttpClient.get(`${this.url}/trtools/${id}`)
  }
  createTransactionTools(data: any) {
    return this.HttpClient.post(`${this.url}/trtools`, data)
  }
  updateTransactionTools(id: any, data: any) {
    return this.HttpClient.put(`${this.url}/trtools/${id}`, data)
  }
  deleteTransactionTools(id: any) {
    return this.HttpClient.delete(`${this.url}/trtools/${id}`)
  }
  filterBydateTools(data: any) {
    return this.HttpClient.post(`${this.url}/trtools/filterBydate`, data)
  }

  // Section
  getSection() {
    return this.HttpClient.get(`${this.url}/section`)
  }
  showSection(id: any) {
    return this.HttpClient.get(`${this.url}/section/${id}`)
  }
  createSection(data: any) {
    return this.HttpClient.post(`${this.url}/section`, data)
  }
  updateSection(id: any, data: any) {
    return this.HttpClient.put(`${this.url}/section/${id}`, data)
  }
  deleteSection(id: any) {
    return this.HttpClient.delete(`${this.url}/section/${id}`)
  }

  // Storage
  getStorage() {
    return this.HttpClient.get(`${this.url}/storage`)
  }
  showStorage(id: any) {
    return this.HttpClient.get(`${this.url}/storage/${id}`)
  }
  createStorage(data: any) {
    return this.HttpClient.post(`${this.url}/storage`, data)
  }
  updateStorage(id: any, data: any) {
    return this.HttpClient.put(`${this.url}/storage/${id}`, data)
  }
  deleteStorage(id: any) {
    return this.HttpClient.delete(`${this.url}/storage/${id}`)
  }


  // Documentation
  showDocumentation(id: any) {
    return this.HttpClient.get(`${this.url}/documentation/${id}`)
  }
  getDocMasterFg() {
    return this.HttpClient.get(`${this.url}/documentation/masterfg`)
  }
  getDocTransactionFg() {
    return this.HttpClient.get(`${this.url}/documentation/transactionfg`)
  }
  getDocMasterMaterial() {
    return this.HttpClient.get(`${this.url}/documentation/mastermaterial`)
  }
  getDocTransactionMaterial() {
    return this.HttpClient.get(`${this.url}/documentation/transactionmaterial`)
  }
  getDocMasterPackaging() {
    return this.HttpClient.get(`${this.url}/documentation/masterpackaging`)
  }
  getDocTransactionPackaging() {
    return this.HttpClient.get(`${this.url}/documentation/transactionpackaging`)
  }
  getDocMasterTools() {
    return this.HttpClient.get(`${this.url}/documentation/mastertools`)
  }
  getDocTransactionTools() {
    return this.HttpClient.get(`${this.url}/documentation/transactiontools`)
  }
  getDocSection() {
    return this.HttpClient.get(`${this.url}/documentation/masterSection`)
  }
  getDocStorage() {
    return this.HttpClient.get(`${this.url}/documentation/masterStorage`)
  }



  // Error handling
  errorHttpHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error ${error.error.message}`
    }
    else {
      errorMessage = `Error code : ${error.status}\n${error.message}`
    }
    return throwError(errorMessage)
  }

}
