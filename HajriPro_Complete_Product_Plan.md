
# HajriPro – Complete Product Planning Document

## Product Overview
HajriPro is a location-based digital attendance and project management mobile application designed specifically for construction sites.  
It focuses on simplicity, Gujarati-first usability, and reliability for non-technical workers.

Product By: Astrid Web Technology LLP

---

## Core Objectives
- Digital attendance (Hajri) for construction workers
- Location-based check-in/check-out
- Simple UI for workers
- Strong dashboards for builders/owners
- Scalable SaaS-ready architecture

---

## User Roles

### 1. Owner (Builder)
- Create and manage multiple projects
- Add partners (optional)
- Add and assign workers
- View attendance and reports

### 2. Partner
- View assigned project data
- Read-only access to attendance and reports

### 3. Worker
- Login via mobile + OTP
- Check-in / Check-out
- Location-based attendance
- Very simple UI (Gujarati-first)

---

## Attendance Logic
- GPS-based attendance
- Project radius: 100–200 meters
- One attendance per day per worker
- Optional selfie attendance (future)
- Auto working hours calculation

---

## Application Flow (Summary)
1. App Open
2. Language Selection
3. OTP Login
4. Role Detection
5. Role-based Dashboard
6. Attendance / Reports / Management

---

## UI Screens (Wireframe Level)

### Global
- Splash Screen
- Language Selection
- OTP Login

### Owner
- Dashboard
- Add Project
- Project List
- Project Detail
- Add Partner
- Worker List
- Attendance Overview
- Reports

### Worker
- Dashboard (Big buttons)
- Check-in Screen
- Location Validation
- Success / Error Screens
- Check-out Screen

### Partner
- Dashboard
- Attendance View (Read-only)

---

## Database Structure (Core Tables)

### users
- id
- name
- mobile
- role (owner/partner/worker)
- language
- is_active

### projects
- id
- owner_id
- name
- type
- latitude
- longitude
- radius_meter
- status

### project_workers
- id
- project_id
- worker_id
- is_active

### attendance
- id
- project_id
- worker_id
- attendance_date
- check_in_time
- check_in_lat
- check_in_lng
- check_out_time
- working_minutes
- status

---

## Technology Stack

### Mobile App
- React Native (Android + iOS)
- Expo (recommended)

### Backend
- Laravel (API-based)
- REST APIs
- Role-based access

### Database
- MySQL / PostgreSQL

### Hosting
- AWS / DigitalOcean

---

## Branding

### Brand Name
HajriPro

### Tagline
Digital Hajri, Zero Confusion

### Logo Concept
- Abstract “H” mark
- Professional SaaS look
- Suitable for app icon and website

---

## Color Palette
- Primary: Indigo / Dark Blue
- Secondary: Purple Accent
- Background: White

---

## React Native UI Templates (Envato Elements – Suggested Search)

Use these keywords on https://elements.envato.com/

- React Native Mobile App UI Kit
- React Native Attendance App
- React Native Admin Dashboard
- React Native Project Management App
- React Native Field Service App

Recommended approach:
- One Starter UI Kit
- One Dashboard UI
- One Attendance-specific UI

---

## Monetization (Future)
- Free plan: 1 project, limited workers
- Paid plans: Monthly / Yearly
- Builder-focused pricing

---

## Roadmap

### Phase 1 (MVP)
- Attendance
- Projects
- Workers
- Reports

### Phase 2
- Payments
- Advances
- Leave management

### Phase 3
- Material tracking
- Invoicing
- Multi-company SaaS

---

## Status
Brand: Final  
Logo: Final  
Planning: Complete  
Ready for Design & Development 🚀
