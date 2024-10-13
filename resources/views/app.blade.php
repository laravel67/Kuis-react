<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title inertia>{{ config('app.name', 'Laravel') }}</title>
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="{{ asset('assets/vendor/fonts/boxicons.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/vendor/css/core.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/vendor/css/theme-default.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/css/demo.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/vendor/libs/apex-charts/apex-charts.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/app.css') }}">
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
        <style>
            .layout-menu {
                transition: transform 0.3s ease;
                transform: translateX(-100%); /* Default state - hidden */
            }

            .layout-menu.visible {
                transform: translateX(0); /* State when visible */
            }
        </style>
    </head>
    <body >
        @inertia
        
        <script src="{{ asset('assets/vendor/libs/jquery/jquery.js') }}" defer></script>
        <script src="{{ asset('assets/vendor/js/helpers.js') }}"></script>
        <script src="{{ asset('assets/js/config.js') }}"></script>
        <script src="{{ asset('assets/vendor/libs/popper/popper.js') }}" defer></script>
        <script src="{{ asset('assets/vendor/js/bootstrap.js') }}" defer></script>
        <script src="{{ asset('assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js') }}" defer></script>
        <script src="{{ asset('assets/vendor/js/menu.js') }}" defer></script>
        <script src="{{ asset('assets/vendor/libs/apex-charts/apexcharts.js') }}" defer></script>
        <script src="{{ asset('assets/js/main.js') }}" defer></script>
        <script src="{{ asset('assets/js/dashboards-analytics.js') }}" defer></script>
    </body>
</html>
