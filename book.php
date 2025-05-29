<?php
$booked_file = 'booked.txt';

$fecha = $_POST['fecha'];
$hora = $_POST['hora'];
$slot = $fecha . ' ' . $hora;

// Read current bookings
$booked = file_exists($booked_file) ? file($booked_file, FILE_IGNORE_NEW_LINES) : [];

if (in_array($slot, $booked)) {
    echo "⛔ Esta hora ya está reservada. Por favor, elige otra.";
    exit;
}

// Save booking
file_put_contents($booked_file, $slot . PHP_EOL, FILE_APPEND);

// Send email
$to = "rosinareyasis@gmail.com";
$subject = "Nueva reserva: $slot";
$message = "Nueva cita agendada para: $slot";
$headers = "From: no-reply@rosinarey.com";

mail($to, $subject, $message, $headers);

echo "✅ Reserva confirmada para: $slot";
?>
