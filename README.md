base url ``http://localhost:3000/api/v1/auth``

| Route | body | parameter | 
|---------|---------|---------| 
|   `/users`  | none | none | 
|  `/signup` | username, email, password, <br />sponser_id,  ward_no, <br />panchayath_name, phone_no  | none  | 
|   `/login`  | phone_no, password | none | 
|   `/change-password-req`  | email | none | 
|   `/change-password/:token`  | password, confirmPassword | token | 