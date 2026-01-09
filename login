Command:
curl -X POST http://localhost:5000/customer/login -H "Content-Type: application/json" -d '{"username": "ladlyghosh", "password": "mypassword123"}'

Output:
{
  "message": "Customer successfully logged in"
}
