# My Assigned Sections

## 1. AI Meal Planning Assistant (Premium Meal Chart)

The **AI Meal Planning Assistant** is an AI-powered feature that generates a personalized meal chart based on the information provided by the user. The user will submit relevant information, which will be processed through an AI API to generate suitable meal suggestions for different times of the day, such as breakfast, lunch, snacks, and dinner.

## 2. Advertisement (Gym-related Ads)

The **Advertisement** section displays fitness-related product advertisements based on the exercise selected by the user. The system matches the selected exercise with relevant products and displays related advertisements.

**Examples:**

* **Run** → Running Shoes, Sportswear, Sports Accessories
* **Yoga** → Yoga Mat, Yoga Block, Yoga Accessories
* **Weight Training** → Dumbbells, Resistance Bands, Gym Gloves

## Overview

These two sections provide personalized experiences within **Fitora**. The **AI Meal Planning Assistant** helps users generate personalized meal suggestions, while the **Advertisement** section displays exercise-related fitness product advertisements based on the user's selected activity.

## My Branch

**Developer:** [Simanto Poddar](https://github.com/simanto-poddar)

**Repository:** [Fitora](https://github.com/Developer-Moy/Fitora)

**Branch:** `simanto-poddar`

**Branch Link:** [View My Branch](https://github.com/Developer-Moy/Fitora/tree/simanto-poddar)

## 17-Aug-26

* Built comprehensive AI Meal Planner form (AIMealPlanner.tsx) with multi-step user input interface
* Created TypeScript types for meal planning data (mealTypes.ts, mealData.ts)
* Implemented form sections for user profile, goals, dietary preferences, and meal structure

## 18-Aug-26

* Pulled the latest changes from the development branch into my (`simanto-poddar`) branch and resolved the issues/conflicts found on my side.

### Meal Chart API Implementation

* Implemented the Meal Chart API endpoints:

  * `GET /api/meal-charts?userId={userId}` — Fetch meal charts for a specific user.
  * `POST /api/meal-charts` — Create and save a meal plan.
* The `GET /api/meal-charts` endpoint requires a `userId` query parameter.

### Client Environment Variables

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## 19-Aug-26

* Built Premium Meal Chart section (MealChartSection.tsx) with 2x2 grid layout
* Implemented meal preview cards with nutritional breakdown and calorie tracking
* Added daily caloric goal progress bar with visual indicators

## 20-Aug-26

* Built Advertisement section (Advertisement.tsx) with featured ad and marquee carousel
* Implemented responsive ad cards with hover effects and animations
* Added fitness marketplace section with product categories (Equipment, Gym, Nutrition, Sportswear)

## 23-Aug-26

* Built interactive Water Hydration progress ring widget (HydrationTracker.tsx)
* Implemented localStorage-based data persistence for daily tracking
* Added celebration particle effects and confetti on goal completion

## 24-Aug-26

* Built Coaches section (Coaches.tsx) with responsive image layout and mentor-focused content
* Implemented Meet Our Trainers section (Trainers.tsx) with 6-trainer asymmetric gallery
* Added hover overlays with trainer names and responsive ordering for mobile/tablet/desktop

## 25-Aug-26

* `Meals Page`

  * Built and structured the Meals page.
  * Integrated meal data with the page layout.
  * Added a responsive listing structure for meal cards.

* ` MealCard `

  * Created the reusable Meal Card component.
  * Displays essential meal information.
  * Added a **View Details** interaction for opening the meal details modal.

* `Meal Details Modal`

  * Created the meal details modal.
  * Displays detailed information such as **name, ingredients, calories, and description**.
  * Designed the modal following Fitora's existing UI style. 
