# API Documentation

## API Endpoints

### Admin Endpoints

#### 1. Filter Complaints by Status
- **Endpoint**: `localhost:4000/api/admin/filterbystatus`
- **Method**: POST
- **Role**: Admin
- **Request Body**:
  ```json
  {
      "status": "Pending"
  }
  ```
- **Description**: Filters complaints based on their status.

#### 2. Get All Employees
- **Endpoint**: `localhost:4000/api/admin/getallemployees`
- **Method**: GET
- **Role**: Admin
- **Description**: Retrieves a list of all employees including their names and usernames.

#### 3. Assign Complaint
- **Endpoint**: `localhost:4000/api/admin/assign/`
- **Method**: POST
- **Role**: Admin
- **Request Body**:
  ```json
  {
      "assignee": "Priyanshi",
      "Dak_ID": "A893"
  }
  ```
- **Description**: Assigns a complaint to an employee.

#### 4. Add Employee
- **Endpoint**: `localhost:4000/api/admin/addEmployee`
- **Method**: POST
- **Role**: Admin
- **Request Body**:
  ```json
  {
      "adminUsername": "Hemant27",
      "employeeUsername": "Hemant123",
      "employeePassword": "xyz"
  }
  ```
- **Description**: Adds a new employee to the system.

### User Endpoints

#### 1. User Signup
- **Endpoint**: `localhost:4000/api/user/signup`
- **Method**: POST
- **Request Body**:
  ```json
  {
      "username": "newUser3",
      "fullName": "myfullname",
      "password": "xyz"
  }
  ```
- **Description**: Registers a new user in the system.

#### 2. Register Complaint
- **Endpoint**: `localhost:4000/api/user/complainRegister`
- **Method**: POST
- **Request Body**:
  ```json
  {
      "Dak_ID": "A893",
      "Date_Received": "27-12-2003",
      "Sender_Information": "Alive",
      "Sender_Number": 1234,
      "Complaint_Details": "why I am alive",
      "userName": "newUser"
  }
  ```
- **Description**: Registers a new complaint.

#### 3. Get Complaint status by Dak_ID
- **Endpoint**: `localhost:4000/api/user/complain`
- **Method**: POST
- **Request Body**:
  ```json
  {
      "Dak_ID": "A893"
  }
  ```
- **Description**: Retrieves a complaint by its Dak_ID.

### Employee Endpoints

#### 1. Get Complaint by Dak_ID
- **Endpoint**: `localhost:4000/api/employee/getComplaintById`
- **Method**: POST
- **Request Body**:
  ```json
  {
      "Dak_ID": "A893"
  }
  ```
- **Description**: Retrieves a complaint by its Dak_ID for employees.

#### 2. Add Remarks and Change Complaint Status
- **Endpoint**: `localhost:4000/api/employee/addremarks`
- **Method**: POST
- **Request Body**:
  ```json
  {
      "employeeUsername": "Priyanshi",
      "complaintID": "A893",
      "newStatus": "Complete",
      "remarks": "ask better questions"
  }
  ```
- **Description**: Allows an employee to add remarks to a complaint and change its status. If the status is set to "Complete", the complaint will be removed from the employee's assignments.

---

**Note**: Make sure to replace `localhost:4000` with your actual server address if it's different. Each endpoint is designed to perform specific tasks, and appropriate role-based access should be maintained.
