# My Assigned Sections

## 1. AI Meal Planning Assistant (Premium Meal Chart)

The **AI Meal Planning Assistant** is an AI-powered feature that generates a personalized meal chart based on the information provided by the user. The user will submit relevant information, which will be processed through an AI API to generate suitable meal suggestions for different times of the day, such as breakfast, lunch, snacks, and dinner.

## 2. Advertisement (Gym-related Ads)

The **Advertisement** section displays fitness-related product advertisements based on the exercise selected by the user. The system matches the selected exercise with relevant products and displays related advertisements.

**Examples:**

- **Run** → Running Shoes, Sportswear, Sports Accessories
- **Yoga** → Yoga Mat, Yoga Block, Yoga Accessories
- **Weight Training** → Dumbbells, Resistance Bands, Gym Gloves

## 3. Healthy Meals Page (`/meals`)

## Overview

These two sections provide personalized experiences within **Fitora**. The **AI Meal Planning Assistant** helps users generate personalized meal suggestions, while the **Advertisement** section displays exercise-related fitness product advertisements based on the user's selected activity.

## My Branch

**Developer:** [Simanto Poddar](https://github.com/simanto-poddar)

**Repository:** [Fitora](https://github.com/Developer-Moy/Fitora)

**Branch:** `simanto-poddar`

**Branch Link:** [View My Branch](https://github.com/Developer-Moy/Fitora/tree/simanto-poddar)

## 17-Aug-26

- Built comprehensive AI Meal Planner form (AIMealPlanner.tsx) with multi-step user input interface
- Created TypeScript types for meal planning data (mealTypes.ts, mealData.ts)
- Implemented form sections for user profile, goals, dietary preferences, and meal structure

## 18-Aug-26

- Pulled the latest changes from the development branch into my (`simanto-poddar`) branch and resolved the issues/conflicts found on my side.

### Meal Chart API Implementation

- Implemented the Meal Chart API endpoints:
  - `GET /api/meal-charts?userId={userId}` — Fetch meal charts for a specific user.
  - `POST /api/meal-charts` — Create and save a meal plan.

- The `GET /api/meal-charts` endpoint requires a `userId` query parameter.

### Client Environment Variables

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## 19-Aug-26

- Built Premium Meal Chart section (MealChartSection.tsx) with 2x2 grid layout
- Implemented meal preview cards with nutritional breakdown and calorie tracking
- Added daily caloric goal progress bar with visual indicators

## 20-Aug-26

- Built Advertisement section (Advertisement.tsx) with featured ad and marquee carousel
- Implemented responsive ad cards with hover effects and animations
- Added fitness marketplace section with product categories (Equipment, Gym, Nutrition, Sportswear)

## 23-Aug-26

- Built interactive Water Hydration progress ring widget (HydrationTracker.tsx)
- Implemented localStorage-based data persistence for daily tracking
- Added celebration particle effects and confetti on goal completion

## 24-Aug-26

- Built Coaches section (Coaches.tsx) with responsive image layout and mentor-focused content
- Implemented Meet Our Trainers section (Trainers.tsx) with 6-trainer asymmetric gallery
- Added hover overlays with trainer names and responsive ordering for mobile/tablet/desktop

## 25-Aug-26

- `Meals Page`
  - Built and structured the Meals page.
  - Integrated meal data with the page layout.
  - Added a responsive listing structure for meal cards.

- `MealCard`
  - Created the reusable Meal Card component.
  - Displays essential meal information.
  - Added a **View Details** interaction for opening the meal details modal.

- `Meal Details Modal`
  - Created the meal details modal.
  - Displays detailed information such as **name, ingredients, calories, and description**.
  - Designed the modal following Fitora's existing UI style.

## 27-Aug-26

### Meal plans with multi-tag filtering (`goal`, `caloriesMin`, `caloriesMax`, `prepTime`, `dietaryTags`)

GET(All Meals) <http://localhost:5001/api/meals/getMeals>

GET <http://localhost:5001/api/meals/getMeals?goal=weight-loss&caloriesMin=300&caloriesMax=400&dietaryTags=high-protein>

GET <http://localhost:5001/api/meals/getMeals?goal=muscle-gain&dietaryTags=high-protein&prepTime=30>

GET <http://localhost:5001/api/meals/getMeals?goal=weight-loss&caloriesMin=300&caloriesMax=500&prepTime=30&dietaryTags=high-protein,low-carb>

GET <http://localhost:5001/api/meals/getMeals?goal=maintenance&dietaryTags=vegan,gluten-free>

### Detailed View including ingredient list, and macro breakdown (Protein, Carbs, Fats)

GET <http://localhost:5001/api/meals/6a900055238a668c7442cb6d>

### Weekly schedule distributing daily calories across Breakfast, Lunch, Snack, and Dinner

POST /api/meal-charts/createMealChart

### 7 Day meal chart for authenticated athlete

GET <http://localhost:5001/api/meal-charts/getMealCharts?userId=user_123>

## 30-Aug-26

- add mealcharts.json (Fitora\client\src\data\mealcharts.json)

## 31-Aug-26

- Finding bug, Make a document.

## 01-Sep-26

- Finding bug, Make proper document and fix the bug.

## 02-Sep-26

Redesigned the Action Button Footer UI and added the **“Add to Daily Plan”** button to both the Meal Card and Meal Modal for a consistent user experience.

- When a logged-in user clicks "Add to Daily Plan" on any meal card or modal, the client first resolves the user's ID from any available login session (Better Auth or localStorage). It then sends a POST /api/daily-plan request with that userId plus the full meal data (name, calories, ingredients, etc.). The Express server receives the request, validates the fields, and saves a new document containing the userId and meal data into the MongoDB collection usersdailymealplan. If the user is not logged in, a toast error is shown and nothing is saved.

GET /api/daily-plan/:userId

- Returns all daily plan entries saved by the given user, newest first.

TEST <http://localhost:5000/api/daily-plan/6a97f3f95819d9d4ff781926>

We built a feature that lets users save their favorite food items to a custom "Daily Meal Plan" with one click. When a logged-in user clicks "Add to Daily Plan", the meal gets saved to their account and instantly shows up under a new section on their profile page.

## 03-Sep-26

- Review the work we completed this week and check for any issues.
- Fixing the bugs i find during the review.

- Protect dashboard route for unauthenticated users

## 06-Sep-26

- Update Subscription Modal for Card Payment
- Associate userId with PaymentTransaction and implement success verification
