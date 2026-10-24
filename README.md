
## 📄 Resume Builder — React.js

A web application that allows users to create, preview, edit, manage, and download professional resumes in PDF format. Built using React.js with a JSON Server backend, this project demonstrates frontend development, REST API integration, PDF generation, cloud storage, and data visualization.

## 📸 Screenshots

# Home Page

<img width="1897" height="905" alt="image" src="https://github.com/user-attachments/assets/4931e1fa-05d5-48b2-80a5-d05b43a186c8" />

## 🌐 Live Demo

- **Live Application:** https://resume-ha4l24r7f-parvathy-snairs-projects.vercel.app/

## ✨ Features

### 📝 Resume Creation and Preview
- Create resumes by entering personal, educational, professional, and project details.
- Preview resume details dynamically.
- Manage form data using React state and controlled inputs.

### ✏️ Resume Management
- View all saved resumes.
- Edit existing resumes using their unique IDs.
- Delete resumes when required.
- Search resumes by job role.
- Navigate through resume listings using pagination.

### 📄 PDF Generation and Download
- Capture the resume HTML element using `html2canvas`.
- Generate downloadable PDF files using `jsPDF`.
- Upload resume images to Cloudinary.
- Record download details in JSON Server.

### 📊 Download Analytics
- Track resume download activity.
- Visualize download statistics using Chart.js.
- Display charts using `react-chartjs-2`.

### 🔌 REST API Integration
- Perform Create, Read, Update, and Delete (CRUD) operations.
- Configure Axios instances for API requests.
- Use Axios interceptors to handle request and response processing.
- Communicate with the JSON Server backend.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Building reusable UI components |
| Vite | Development server and build tool |
| JavaScript | Application logic |
| React Hooks | State management and optimization |
| React Router DOM | Navigation and routing |
| Axios | HTTP requests and API integration |
| JSON Server | REST API and data storage |
| Material UI | UI components |
| Bootstrap | Responsive styling |
| React Icons | Icons |
| html2canvas | Capturing resume content as an image |
| jsPDF | PDF generation |
| Cloudinary | Cloud image storage |
| Chart.js | Data visualization |
| Render | Backend deployment |
| Vercel | Frontend deployment |

## ⚙️ Application Workflow

1. The user enters resume details through the React form.
2. React state manages the entered information and passes it to the preview component.
3. Axios sends HTTP requests to the JSON Server backend.
4. Resume records can be created, retrieved, updated, and deleted.
5. The application captures the resume content and generates a downloadable PDF.
6. Resume images are uploaded to Cloudinary.
7. Download details are stored in JSON Server and used to visualize download statistics.
8. Users can search and paginate through the available resumes.

## 🏗️ Project Structure

```text
resume-builder/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

> This is a representative structure. Adjust it to match the actual folders and files in your repository.

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js and npm
- Git
- A code editor such as Visual Studio Code

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project

```bash
cd resume-builder
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure the Backend

The application uses JSON Server as its backend.

Configure the backend URL in your Axios instance so that it points to your running JSON Server or deployed backend.

For local development, the URL may look like this:

```javascript
baseURL: "http://localhost:4000"
```

Make sure the JSON Server database file and required collections are configured according to your project.

### 5. Configure Cloudinary

Set up your Cloudinary configuration according to your implementation.

For production, avoid exposing private API secrets in frontend code. Use an appropriately secured upload configuration or backend endpoint.

### 6. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

### 7. Run the Backend

Start JSON Server separately using the command and configuration defined in your project.

Ensure that the frontend Axios base URL matches the backend address.

## 🌍 Deployment

The project is deployed using:

- **Frontend:** Vercel
- **Backend:** Render

The deployed React application communicates with the deployed JSON Server backend through its configured API base URL.

For a successful deployment, ensure that the backend is accessible, the API URL is correct, and the necessary Cloudinary configuration is in place.

## 📚 Key Learning Outcomes

Through this project, I gained hands-on experience with:

- React components, props, state management, and state lifting.
- React Hooks, including `useState` and `useMemo`.
- Client-side routing with React Router DOM.
- REST API integration and CRUD operations.
- Axios instances and interceptors.
- HTML-to-image conversion and PDF generation.
- Cloud image storage integration.
- Search functionality and pagination.
- Data visualization and download analytics.
- Frontend and backend deployment.

## 🔮 Future Improvements

- Replace JSON Server with a production-ready database such as PostgreSQL or MongoDB.
- Implement authentication and user-specific resume management.
- Add multiple resume templates and customization options.
- Improve PDF formatting and support additional download layouts.
- Introduce automated testing and stronger input validation.
- Enhance security and error handling for production use.



---

⭐ If you find this project useful, consider giving the repository a star!
