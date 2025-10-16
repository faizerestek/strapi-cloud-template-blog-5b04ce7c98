# Shared Components

This directory contains reusable components that can be used across different content types in the Strapi application.

## Weather Component

The Weather component uses the `react-open-weather` library to display current weather information.

### Configuration

To use the Weather component, you'll need an OpenWeather API key. Set it in your environment variables:

```env
OPENWEATHER_API_KEY=your_api_key_here
```

Get your free API key at: https://openweathermap.org/api

### Fields

- **city** (string, required): The city name to display weather for (default: "London")
- **unit** (enum): Temperature unit - "metric" or "imperial" (default: "metric")
- **language** (string): Language code for the weather description (default: "en")

### Usage in Content Types

This component is available in dynamic zones. It has been added to the shared components collection and can be included in any content type's dynamic zone.

### Example

When using this component in the admin panel, simply:
1. Select "Weather" from the available components
2. Enter the city name
3. Choose your preferred unit (metric/imperial)
4. Set the language code if needed

The weather widget will automatically fetch and display current weather conditions for the specified location.
