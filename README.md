# **Mia  Kubert Portfolio Template**

### **Thank You for Your Purchase!**

Thank you for purchasing the **Mia  Kubert Portfolio Template**. I’m excited to see how you customize it to showcase your work. This guide will help you set up, customize, and deploy your portfolio with ease. If you need assistance, I offer **100% free setup support** to ensure everything is running smoothly.

---

### **Introduction**

The **Mia Kubert Portfolio Template** is a **Next.js 14-powered SPA** crafted for creative professionals. It combines clean design, smooth animations (via **GSAP**), and responsive layouts to provide an engaging user experience. Styling is powered by **Tailwind CSS**, offering you flexibility to customize your template.

---

### **Features**

- **Page Load Animations**: Crafted with GSAP for elegant transitions.
- **Custom Interactions**: Dynamic hover effects for buttons and links.
- **Fully Responsive**: Mobile-first design for all screen sizes.
- **Tailwind CSS**: Modular and utility-first styling system.
- **Reusable Components**: Efficient, customizable Next.js components.
- **Free Setup Assistance**: I’ll help you get your portfolio up and running at no cost.

---

### **Setup Instructions**

#### **1. Requirements**

Before you start, ensure you have these installed:

- **Node.js** (v14 or higher)
- **NPM** or **Yarn**

#### **2. Installation**

1. Clone or download the template files to your local system.
2. Open your terminal and navigate to the project directory:
   ```bash
   cd mark-kubert-template
   ```
3. Install dependencies:
   ```bash
   npm install  # or yarn install
   ```

#### **3. Running the Development Server**

Start the development server to preview your template locally:

```bash
npm run dev  # or yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view your portfolio.

---

### **Customizations**

#### **1. Tailwind CSS Configuration**

Update your colors, fonts, and more in the **Tailwind configuration file**:

- File: `tailwind.config.js`
- Example:
  ```javascript
  module.exports = {
    theme: {
      extend: {
        colors: {
          dark: "#171717",
          whitegrey: "#F1F1F1",
        },
        fontFamily: {
          sans: ["Neue Montreal", "sans-serif"],
        },
      },
    },
  };
  ```

#### **2. Content Editing**

Edit sections in the `/app` folder:

- **Homepage**: `/page.jsx`

#### **3. GSAP Animations**

Animation logic resides in `/components/ui animation`. Tweak or create new effects as needed:

```javascript
gsap.from(".hero-title", { opacity: 0, y: -50, duration: 1 });
```

#### **4. Component Customization**

Reusable components are stored in `/components`. Modify these to update site-wide elements:

- **Header**: `/components/layouts/Header.jsx`
- **Footer**: `/components/layouts/Footer.jsx`

#### **5. Showcase Customization**

You can showcase your work by:

1. Replacing placeholder images in the `/assets/templates/` folder.
2. Change project data inside `/constants/data.js` file.
   Example:
   ```javascript
   export const Projects = [
     { img: "/assets/templates/tm-1.jpeg", href: "#tm-1" },
     { img: "/assets/templates/tm-2.jpeg", href: "#tm-2" },
     { img: "/assets/templates/tm-3.jpeg", href: "#tm-3" },
     { img: "/assets/templates/tm-4.jpeg", href: "#tm-4" },
     { img: "/assets/templates/tm-5.jpeg", href: "#tm-5" },
   ];
   ```
3. Updating the project details in `/components/layouts/Project.jsx` or equivalent sections.
4. Providing a **preview URL** for your showcased work in the portfolio.  
   Example: Add a “View Work” button linked to your preview.

---

### **Deployment**

#### **Deploying on Hostinger (or Other Hosting Platforms)**

If you prefer hosting on **Hostinger** or another platform instead of Vercel:

1. **Build the Project**
   Run the following command to create a production-ready build:

   ```bash
   npm run build
   ```

   This will generate an `/out` folder.

2. **Upload to Hosting Platform**

   - Use Hostinger's **File Manager** or an FTP client to upload the contents of the `/out` folder to your server's public directory.
   - Ensure your hosting environment supports static site deployment.

3. **Domain Configuration**
   Set up your domain to point to the hosting platform by updating the DNS records.  
   For more details, check out [Hostinger Deployment Guide](https://www.hostinger.com/tutorials).

---

### **Refund Policy**

This is a digital product; refunds are not available. Please ensure the template meets your needs before purchasing. Previews and documentation are provided for review.

---

### **Support**

If you need any help or free setup assistance, feel free to reach out!

- **Email**: milcodestudio@gmail.com
- **Support Hours**: Monday to Friday, 9 AM - 5 PM (GMT)

Thank you again for choosing the **Mia Kubert Portfolio Template**! 🎉
