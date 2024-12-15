# Wishlist Application

## Overview

The Wishlist application is a React Native app built using Expo and Realm. It allows users to create, view, and manage their wishes in a user-friendly interface. The app supports both light and dark themes and is optimized for mobile devices.

## Features

- **Create Wishes**: Users can add new wishes with a name and description.
- **View Wishes**: A list of all wishes is displayed, with the ability to view details.
- **Delete Wishes**: Users can remove wishes from their list.
- **Responsive Design**: The app adapts to different screen sizes and orientations.
- **Dark Mode Support**: The app automatically switches between light and dark themes based on user preferences.

## Technologies Used

- **React Native**: For building the mobile application.
- **Expo**: For easy development and deployment of the app.
- **Realm**: For local database management.
- **TypeScript**: For type safety and better development experience.
- **NativeWind**: For utility-first styling.

## Installation

To get started with the Wishlist application, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/imlogicgates/wishlist.git
   cd wishlist
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the application**:
   - For Android:
     ```bash
     npm run android
     ```
   - For iOS:
     ```bash
     npm run ios
     ```
   - For Web:
     ```bash
     npm run web
     ```

## Usage

- Launch the app on your device or simulator.
- Use the interface to add, view, and delete wishes.
- The app will automatically save your wishes locally using Realm.

## Code Structure

The codebase is organized as follows:

```
/app
  /components          # Reusable components
  /schemas            # Data schemas for Realm
  /hooks              # Custom hooks
  /constants          # Constants like colors
  /assets             # Images and animations
  /tabs               # Tab navigation structure
  _layout.tsx         # Main layout component
  +html.tsx          # HTML configuration for web
  +not-found.tsx      # Not found screen
```

### Key Component: WishList

The `WishList` component is responsible for displaying the list of wishes. It uses the `FlatList` component from React Native to render the list efficiently. The component fetches data from the Realm database and handles empty states with the `EmptyList` component.

```typescript
import { Wish } from "@/schemas";
import { useQuery, useRealm } from "@realm/react";
import React from "react";
import { FlatList, RefreshControl } from "react-native";
import { EmptyList } from "../common";
import { WishItem } from "./WishItem";

export const WishList: React.FC = () => {
  const wishlist = useQuery(Wish);
  const realm = useRealm();

  return (
    <FlatList
      data={wishlist}
      keyExtractor={(item) => item._id.toString()}
      renderItem={({ item }) => <WishItem item={item} />}
      className="p-4"
      refreshControl={
        <RefreshControl refreshing={realm.isClosed} onRefresh={() => {}} />
      }
      ListEmptyComponent={<EmptyList title="wishlist items" />}
      onEndReached={() => {}}
      onEndReachedThreshold={0.5}
      accessibilityRole="list"
    />
  );
};

export default WishList;
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or feature requests.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
