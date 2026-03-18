<?php
// НАСТРОЙКИ TELEGRAM
$bot_token = '8618162763:AAGKCbKIECWQ7OGlrZZbC56SS5EjKKwJHcc'; // Получи у @BotFather
$chat_id = '360193337';      // Узнай у @username_to_id_bot

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = strip_tags($_POST['name'] ?? '');
    $phone = strip_tags($_POST['phone'] ?? '');
    $service = strip_tags($_POST['service'] ?? '');
    $date = strip_tags($_POST['date'] ?? '');
    
    $message = "📌 Новая заявка с сайта ТОП БАРБЕРС!\n\n";
    $message .= "👤 Имя: $name\n";
    $message .= "📞 Телефон: $phone\n";
    $message .= "✂️ Услуга: $service\n";
    $message .= "📅 Дата: $date\n";
    
    $url = "https://api.telegram.org/bot$bot_token/sendMessage";
    $data = [
        'chat_id' => $chat_id,
        'text' => $message
    ];
    
    $options = [
        'http' => [
            'header' => "Content-type: application/x-www-form-urlencoded\r\n",
            'method' => 'POST',
            'content' => http_build_query($data)
        ]
    ];
    
    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    
    if ($result) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
    exit;
}
?>