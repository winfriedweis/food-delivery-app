# 🍔 Food Delivery App

> Eine moderne, plattformübergreifende Mobile App für Essensbestellungen, entwickelt mit React Native und Expo. Aktuell
> in Entwicklung.

[![React Native](https://img.shields.io/badge/React_Native-0.76-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-52-000020?style=flat-square&logo=expo)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![NativeWind](https://img.shields.io/badge/NativeWind-v4-06b6d4?style=flat-square&logo=tailwindcss)](https://www.nativewind.dev/)

---

## 📱 Projektübersicht

Diese App demonstriert die Entwicklung einer performanten, nativen Mobile-Anwendung mit einem modernen
JavaScript-basierten Tech Stack. Der Fokus liegt auf einer flüssigen User Experience (UX), intuitivem UI-Design und
sauberer Architektur.

### ✨ Highlights

* **⚡ Schnell & Flüssig:** Optimierte Performance durch React Native Reanimated.
* **🎨 Modernes UI:** Vollständig gestylt mit NativeWind (Tailwind CSS für React Native).
* **🧩 State Management:** Globaler State verwaltet mit Zustand (leichtgewichtig & performant).
* **🧭 Navigation:** Dateibasierte Navigation mittels Expo Router.
* **📱 Cross-Platform:** Eine Codebasis für iOS und Android.

---

## 🛠️ Tech Stack

| Kategorie       | Technologie                                                       | Beschreibung                                 |
|:----------------|:------------------------------------------------------------------|:---------------------------------------------|
| **Framework**   | [React Native](https://reactnative.dev/)                          | Core Framework                               |
| **Plattform**   | [Expo](https://expo.dev/)                                         | SDK 52 & Development Tooling                 |
| **Sprache**     | [TypeScript](https://www.typescriptlang.org/)                     | Statische Typisierung                        |
| **Styling**     | [NativeWind v4](https://www.nativewind.dev/)                      | Tailwind CSS Implementation für React Native |
| **State**       | [Zustand](https://github.com/pmndrs/zustand)                      | Global State Management                      |
| **Navigation**  | [Expo Router](https://docs.expo.dev/router/introduction/)         | File-based Routing                           |
| **Animationen** | [Reanimated](https://docs.swmansion.com/react-native-reanimated/) | Performante 60fps Animationen                |

---

------------------------------------------------------------------------

## 📦 Installation

### 1. Repository klonen

``` bash
git clone https://github.com/winfriedweis/food-delivery-app.git
cd food-delivery-app
```

### 2. Dependencies installieren

``` bash
npm install
# oder
yarn install
```

### 3. App starten

``` bash
npx expo start
```

Im Terminal erscheint ein QR-Code:

- Scanne ihn mit der Expo Go App (Android) oder der Kamera-App (iOS).
- Oder drücke:
- a → Android Emulator
- i → iOS Simulator

------------------------------------------------------------------------

## 📂 Projektstruktur

``` text
food-delivery-app/
├── app/
│   ├── (tabs)/
│   ├── [id].tsx
│   └── index.tsx
├── components/
├── constants/
├── store/
├── assets/
└── tailwind.config.js
```

------------------------------------------------------------------------

## 📸 Features im Detail

- Restaurant Liste -- Horizontales Scrollen und vertikale Listen.
- Warenkorb-Logik -- Produkte hinzufügen, entfernen, Summe berechnen.
- Detail-Ansichten -- Klickbare Restaurant-Cards mit Menü-Seiten.
- Suche -- Echtzeit-Filterung von Restaurants und Gerichten.

------------------------------------------------------------------------

Developed by Winfried Weis
