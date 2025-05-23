# Project Context: Producers Guild Uganda Website

This document provides a direct outline of the content for the Producers Guild Uganda (PGU) website, based on the provided PDF guide. The website will have 5 main pages, and includes a membership login feature with protected routes for authenticated access.

**Domain:** `producersguilduganda.com`

---

## Page 1: Home Page / Landing Page

This page serves as the entry point and provides an overview of the PGU.

* **Navigation Bar:**
    * Logo at the top-left corner, hyperlinked to the home page.
    * Navigation links (Home, About, Membership, Blog & Events, Contact Us) as `MenuDataItem` arrays.
    * A **"Member Login" button** for authentication, leading to protected routes.
* **"About PGU" Section:**
    * Header: "About PGU:"
    * Sub-header: "For the Producers of film, TV and Emerging Media in Uganda"
    * `[Image of PGU/ Film Industry Gathering]`
    * Text: "The National Producers Guild of Uganda (PGU) is a non-profit professional body that represents, advocates for, promote, protects and supports the rights, interests, and professional development of producers for film, television, and digital media in Uganda."
    * Button: "Learn more about us" (hyperlinked to the "About" Page).
* **"Trending Latest Projects" Section:**
    * `[Image Slide of Trending Latest Projects by PGU Members hyperlinked to where each can be watched]` (This slide is mentioned multiple times on the home page).
* **"Member Exclusive Programs" Section:**
    * Header: "Member Exclusive Programs"
    * Sub-Header: "A diverse inclusive skilled producer community"
    * Text: "PGU Members benefit from being part of a professional producing community with easy access to member-only Workshops, Mentorships, Masterclasses, Events, Funding, Employment and Distribution Opportunities for producers at all stages."
    * `[Image Slide of Trending Latest Projects by PGU Members hyperlinked to where each can be watched]`
* **"Membership Qualifications" Section:**
    * Header: "Membership Qualifications"
    * Sub-header: "Join PGU"
    * Text: "PGU membership is not automatic. The Producers Guild of Uganda offers several membership categories, designed to accommodate a wide range of professionals in the creative industries and promote inclusivity, collaboration, and professional development across different stages of a producer’s career."
    * Prompt: "Wondering how to become a member? Click below for more details on the qualifications, application requirements and rates."
    * Button: "Join PGU" (hyperlinked to "Membership" page).
    * `[Image Slide of Trending Latest Projects by PGU Members hyperlinked to where each can be watched]`

---

## Page 2: About

This page provides detailed information about the Producers Guild of Uganda.

* **Header:** "For the Producers of film, TV and Emerging Media in Uganda"
* `[Image of PGU/ Film Industry Gathering]`
* **Introduction:** "The National Producers Guild of Uganda (PGU) is the professional body representing film, television, and digital media producers in Uganda. Established as a not-for-profit company limited by guarantee, PGU’s mission is to advocate for, promote, and support the rights, interests, and professional development of producers, fostering a sustainable and competitive creative economy for Uganda."
* **Mission:**
    * To represent, support, and advocate for Ugandan producers across various media formats.
    * To promote a sustainable creative economy.
    * To emphasize professional development.
    * To create an environment where local talent can thrive, enhance cultural representation, and bring economic benefits.
* **Aims and Objectives (Bulleted List):**
    * Global and National Competitiveness
    * Capacity Building and Training
    * Producers Mark (p.g.u.)
    * Industry Partnerships
    * Advocacy
    * Funding and Investment
    * Digital and Emerging Markets
    * International Representation
* **Call to Action:**
    * Prompt: "Wondering how to become a member? Click below for more details on the qualifications, application requirements and rates."
    * Button: "Join PGU" (hyperlinked to "Membership" page).

---

## Page 3: Membership

This page details the various membership categories, fees, application process, and member rights/obligations.

* **Introduction:** "The Producers Guild of Uganda offers several membership categories, designed to accommodate a wide range of professionals in the creative industries and promote inclusivity, collaboration, and professional development across different stages of a producer’s career."
* **Membership Classes:**
    * **Individual Membership:** Annual, open to individuals with a minimum of 3 qualifying producing credits in specified formats (Feature Length, Short Films, Series, Documentaries, Commercials).
    * **Honorary Members:** Awarded for significant contributions, do not hold voting rights but may advise and participate.
    * **Corporate Members:** Available to companies involved in media production, distribution, or related services.
* **Membership Fees - Initial Membership and Annual Subscription:**
    * One-time access fee: Ushs. 50,000 for new members.
    * Annual Membership subscription fee: Ushs. 50,000.
    * Members accepted mid-year pay full annual fees.
    * Corporate initial annual Membership subscription fee: Ushs. 500,000 (tiered options for sponsorship).
* **Application for Membership:** By written letter or email to `info@producersguilduganda.com`, admitted by a quorum.
* **Cessation of Membership:** Conditions including bankruptcy, unsound mind, neglect of fees, criminal conviction, death, dissolution, giving notice, or expulsion.
* **Expulsion of Members:** Disciplinary powers of the Executive Committee (two-thirds majority vote), member notice (14 days), right to be heard, potential fines or accreditation cancellation.
* **Grievances:**
    * Member can petition Executive Committee for unjust treatment.
    * Appeal process to a committee of at least three Members.
    * Grievances against the Executive Committee as a whole require amicable settlement attempts, then presented to General Assembly.
* **Rights and Obligations:**
    * Producers Mark (p.g.u.): Professional designation for qualified full members.
    * Voting Rights: For members in good standing at General Assembly meetings.
    * Office Eligibility: For full members in good standing to hold office.
    * Participation in Events and Programs: All members can participate in programs, networking, workshops, and access resources.

---

## Page 4: Executive Committee

This page details the leadership body of the Producers Guild of Uganda.

* **Introduction:** "The Executive Committee is the leadership body of the Producers Guild of Uganda, responsible for the overall strategic direction and daily management of the Guild’s affairs. The Committee tenure is 3 years and may be re-elected for subsequent terms."
* **Committee Officers (with `[Headshot]` and `[Name hyperlinked to a blog article showing Executive Committee Bios]` for each, followed by their responsibilities):**
    * President - Mathew Nabwiso
    * 1st Vice President - Nana Kagga
    * 2nd Vice President - Charles Luzinda
    * General Secretary - Arthur Katende
    * Director Communications - Cleopatra Koheirwe
    * Communications Officer - Richard Mulindwa
    * Communications Officer - Vincent Odoi
    * Director Finance/Treasurer - MALAIKA
    * Deputy General Secretary - Kizito Samuel Saviour
    * Director Research and Membership
    * Directors Events & Coordinations - Allan Manzi, Brenda Nanyonjo
    * Directors Investment & Funding - Humphrey Nabimanya, Nathan Magoola, Ayeny T. Steven, Brenda Nanyonjo
    * Directors Foreign Affairs - Humphrey Nabimanya, Nathan Magoola
    * Directors Northern Region
    * Directors West Nile Region
    * Directors Eastern Region
    * Directors Western Region

---

## Page 5: Blog & Events

This page will showcase blog articles and upcoming/past events.

* **Page Title:** "Blog & Events"

---

## Global Elements

* **Contact Us:** This will appear at the bottom of every page.
* **Membership Dashboard (Protected Route):** After successful login via the "Member Login" button, members will be directed to a protected dashboard. This route requires authentication.