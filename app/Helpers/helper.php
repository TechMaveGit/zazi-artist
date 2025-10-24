<?php
if (!function_exists('calculateDistance')) {
    function calculateDistance(float $lat1, float $lon1, float $lat2, float $lon2, string $unit = 'km'): float
    {
        if (($lat1 == $lat2) && ($lon1 == $lon2)) {
            return 0;
        }

        $earth_radius = ($unit === 'miles') ? 3959 : 6371;

        $dLat = deg2rad($lat2 - $lat1);
        $dLon = deg2rad($lon2 - $lon1);

        $a = sin($dLat / 2) * sin($dLat / 2) +
            cos(deg2rad($lat1)) * cos(deg2rad($lat2)) *
            sin($dLon / 2) * sin($dLon / 2);

        $c = 2 * atan2(sqrt($a), sqrt(1 - $a));

        return round($earth_radius * $c, 2);
    }
}

if (!function_exists('badgeColor')) {
    function badgeColor(string $status)
    {
        return match (strtolower($status)) {
            'active' => 'badge-success',
            'inactive' => 'badge-danger',
            'pending' => 'badge-warning',
            'banned' => 'badge-dark',
            'notification' => 'badge-danger',
            'promotion' => 'badge-success',
            'welcome' => 'badge-primary',
            'renewel' => 'badge-warning',
            default => 'badge-primary',
        };
    }
}
