import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/users';

  constructor(private http: HttpClient) { }

  getUsers(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getSearchedUsers(user): Observable<any> {
    return this.http.get(`${this.baseUrl}/search?firstName=`+ user);
  }
  userAuthentication(username,password):Observable<any>{
    //let url ='http://localhost:8080/springboot-crud-rest/a/v1/users/login?username='+username+'&password='+password
    // http://localhost:8080/springboot-crud-rest/a/v1/users/login?username=username&password=password
    //  return this.http.get(`${this.baseUrl}/login?username=`+username+`&password=`+password`);
    return this.http.get(this.baseUrl+'/login?username='+username+'&password='+password);
  }

  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, user);
  }

  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, 
    { responseType: 'text' });
  }

  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
