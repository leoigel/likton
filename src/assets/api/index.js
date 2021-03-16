net_api: function(settings, func, failFunc){
    
     var is_test = false;


     var headers = {
       'Content-Type': 'application/json; charset=utf-8',
     };
    
     if(!this.isNull(localStorage.getItem('user_token'))) 
     { 
       headers.Authorization = localStorage.getItem('user_token');
     }
   

     if (!is_test)
     {
       if (settings.method == 'get')
       {
         this.$http.get(window.api_url + settings.action,  settings.data,{emulateJSON:true, headers: headers})
         .then(response => {
            if (response.body == 'error')
            {
              localStorage.setItem('user_token', '');
              document.location.reload();
            }
             func(response.body);
         }, response => { 
           if (!this.isNull(failFunc)) failFunc(response);
           else func(false);
         });

       }
       else
       {
         this.$http.post(window.api_url + settings.action, settings.data, {emulateJSON:true, headers: headers})
         .then(response => {
          if (response.body == 'error')
          {
            localStorage.setItem('user_token', '');
            document.location.reload();
          }
             func(response.body);
             console.log(response.body);
         }, response => { 
           if (!this.isNull(failFunc)) failFunc(response);
           else func(false);
             console.error(response.body);
         });
     }
     

   },