import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const modifiedReqOne = this.handleBodyIn(req)
    const modifiedReqTwo = modifiedReqOne.clone({
      withCredentials: false,
    })
    
    return next.handle(modifiedReqTwo)

  }

  handleBodyIn(req:HttpRequest<any>) {

    let system = 'rtsLabs'

    if (req.method.toLowerCase() === 'post') {

      if (req.body instanceof FormData) {

        req =  req.clone({
          body: req.body.append('locale', 'en')
        })

      } else {

        const foo:any = {}

        foo['system'] = system

        req =  req.clone({
          body: {...req.body, ...foo}
        })

      }   

    } 

    if (req.method.toLowerCase() === 'get') {

      req = req.clone({
        params: req.params.set('locale', 'en')
      })

    } 
    return req    
  }

}