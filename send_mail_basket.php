<?php

// if($_POST)
if($_SERVER['REQUEST_METHOD'] == 'POST') // Участок 1
{
    require_once 'vendor/autoload.php';

    $surname_bf = filter_var($_POST["surnamebasketform"], FILTER_SANITIZE_STRING);
    $name_bf = filter_var($_POST["namebasketform"], FILTER_SANITIZE_STRING);
    $patronymic_bf = filter_var($_POST["patronymicbasketform"], FILTER_SANITIZE_STRING);
    $email_bf = filter_var($_POST["emailbasketform"], FILTER_SANITIZE_STRING); // Получаем email адрес из формы и фильтруем его
    $phone_bf = filter_var($_POST["phonebasketform"], FILTER_SANITIZE_STRING);
    $deliveryservice_bf = filter_var($_POST["deliveryservicebasketform"], FILTER_SANITIZE_STRING);
    $deliveryarea_bf = filter_var($_POST["deliveryareabasketform"], FILTER_SANITIZE_STRING);
    $deliverycity_bf = filter_var($_POST["deliverycitybasketform"], FILTER_SANITIZE_STRING);
    $deliveryaddress_bf = filter_var($_POST["deliveryaddressbasketform"], FILTER_SANITIZE_STRING);
    $waypayment_bf = filter_var($_POST["waypaymentbasketform"], FILTER_SANITIZE_STRING);
    $message_bf = filter_var($_POST["messagebasketform"], FILTER_SANITIZE_STRING);
    $ordernumber_bf = filter_var($_POST["ordernumberbasketform"], FILTER_SANITIZE_STRING);
    $totalquantitygoods_bf = filter_var($_POST["totalquantitygoodsbasketform"], FILTER_SANITIZE_STRING);
    $totalsumgoods_bf = filter_var($_POST["totalsumgoodsbasketform"], FILTER_SANITIZE_STRING);


    // Получение данных из POST запроса где 'datalocalstogare'  ( это имя поля, которое  добавили к объекту FormData в файле form-basket.js )
    // $jsonData = filter_var($_POST['datalocalstogare'], FILTER_SANITIZE_STRING); // при передачи JSON пользоваться 'filter_var' и 'FILTER_SANITIZE_STRING' нельзя это нарушает данные. 
    $jsonData = $_POST['datalocalstogare'];
    // Преобразование JSON в массив PHP
    $datalocalstogare_bf = json_decode($jsonData, true);


    // Это не понятно что?
    // $subject = 'Stay in touch '.$_POST["name"];


    // Получаем дату и время по номеру заказа '$ordernumber_bf' который формировался из даты и времени на момент оформления
    $timestamp = intval($ordernumber_bf); // Преобразуем строку в число и переводим миллисекунды в секунды
    date_default_timezone_set('Europe/Zaporozhye');
    $dateandtimes = date('Y-m-d H:i:s', round($timestamp / 1000)); // Получаем дату и время в формате "ГГГГ-ММ-ДД ЧЧ:ММ:СС".

    // $subject = 'Message to https://sima.us.to from '.$_POST["name"];
    $subject = 'ЗАКАЗ № '. $ordernumber_bf .' с сайта https://sima-biz.rf.gd от '. $dateandtimes .' на сумму '. $totalsumgoods_bf .'  '. $_POST["name"];
    // $text = "Name: ".$name.". Email Address: ".$email ." Phone:". $phone ." Message:". $message_text;
    $text = 
    "<br /><span style='font-weight: bold; font-size: 17px; text-transform: lowercase;'> ФАМИЛИЯ  </span><span style='font-weight: bold; font-size: 17px; color: blue; text-transform: capitalize;'>". $surname_bf . "</span>" .
    "<br /><span style='font-weight: bold; font-size: 17px; text-transform: lowercase;'> ИМЯ  </span><span style='font-weight: bold; font-size: 17px; color: blue; text-transform: capitalize;'>". $name_bf . "</span>" .
    "<br /><span style='font-weight: bold; font-size: 17px; text-transform: lowercase;'> ОТЧЕСТВО  </span><span style='font-weight: bold; font-size: 17px; color: blue; text-transform: capitalize;'>". $patronymic_bf . "</span>" .
    "<br /><span style='font-weight: bold; font-size: 17px; text-transform: lowercase;'> EMAIL  </span><span style='font-weight: bold; font-size: 17px; color: blue; text-transform: none;'>". $email_bf . "</span>" .
    "<br /><span style='font-weight: bold; font-size: 17px; text-transform: lowercase;'> PHONE  </span><span style='font-weight: bold; font-size: 17px; color: blue; text-transform: uppercase;'>". $phone_bf . "</span>" .
    "<br /><span style='font-weight: bold; font-size: 17px; text-transform: lowercase;'> СЛУЖБА ДОСТАВКИ НАЗВАНИЕ  </span><span style='font-weight: bold; font-size: 17px; color: blue; text-transform: uppercase'>". $deliveryservice_bf . "</span>" .
    "<br /><span style='font-weight: bold; font-size: 17px; text-transform: lowercase;'> ОБЛАСТЬ КУДА ДОСТВКА  </span><span style='font-weight: bold; font-size: 17px; color: blue; text-transform: uppercase;'>". $deliveryarea_bf . "</span>" .
    "<br /><span style='font-weight: bold; font-size: 17px; text-transform: lowercase;'> ГОРОД КУДА ДОСТАВКА  </span><span style='font-weight: bold; font-size: 17px; color: blue; text-transform: uppercase;'>". $deliverycity_bf . "</span>" .
    "<br /><span style='font-weight: bold; font-size: 17px; text-transform: lowercase;'> АДРЕСС КУДА ДОСТАВКА  </span><span style='font-weight: bold; font-size: 17px; color: blue; text-transform: uppercase;'>". $deliveryaddress_bf . "</span>" .
    "<br /><span style='font-weight: bold; font-size: 17px; text-transform: lowercase;'> СПОСОБ ОПЛАТЫ  </span><span style='font-weight: bold; font-size: 17px; color: blue; text-transform: uppercase;'>". $waypayment_bf . "</span>" .
    "<br /><span style='font-weight: bold; font-size: 17px; text-transform: lowercase;'> СООБЩЕНИЕ ДЛЯ УТОЧНЕНИЯ  </span><span style='font-weight: bold; font-size: 17px; color: blue; text-transform: none'>". $message_bf . "</span>" .
    "<br /><span style='font-weight: bold; font-size: 17px; text-transform: lowercase;'> НОМЕР ЗАКАЗА  </span><span style='font-weight: bold; font-size: 17px; color: blue; text-transform: lowercase;'>". $ordernumber_bf . "</span>" .
    "<br /><span style='font-weight: bold; font-size: 17px; text-transform: lowercase;'> КОЛИЧЕСТВО ШТУК В ЗАКАЗЕ  </span><span style='font-weight: bold; font-size: 17px; color: blue; text-transform: lowercase;'>". $totalquantitygoods_bf . "</span>" . 
    "<br /><span style='font-weight: bold; font-size: 17px; text-transform: lowercase;'> ОБЩАЯ СУММА ЗАКАЗА  </span><span style='font-weight: bold; font-size: 17px; color: blue; text-transform: lowercase;'>". $totalsumgoods_bf . "</span><br />";
    // "<br />  ФАМИЛИЯ :   ". $surname_bf .
    // "<br />  ИМЯ :   ". $name_bf .
    // "<br />  ОТЧЕСТВО :   ". $patronymic_bf .
    // "<br />  EMAIL :   ". $email_bf .
    // "<br />  PHONE :   ". $phone_bf .
    // "<br />  СЛУЖБА ДОСТАВКИ НАЗВАНИЕ :   ". $deliveryservice_bf .
    // "<br />  ОБЛАСТЬ КУДА ДОСТВКА :   ". $deliveryarea_bf .
    // "<br />  ГОРОД КУДА ДОСТАВКИ :   ". $deliverycity_bf .
    // "<br />  АДРЕСС КУДА ДОСТАВКА :   ". $deliveryaddress_bf .
    // "<br />  СООБЩЕНИЕ ДЛЯ УТОЧНЕНИЯ :   ". $message_bf .
    // "<br />  НОМЕР ЗАКАЗА :   ". $ordernumber_bf .
    // "<br />  КОЛИЧЕСТВО ШТУК В ЗАКАЗЕ :   ". $totalquantitygoods_bf .
    // "<br />  ОБЩАЯ СУММА ЗАКАЗА :   ". $totalsumgoods_bf ."<br />";
    
    
    



    // Пнрнменная счетчика i для цикла
    $i = 1;
    // Создание текста для письма
    foreach ($datalocalstogare_bf as $item) {
        // $text .= "<div style='margin-bottom: -10px;'>";
        $text .= "<br><span style='font-weight: bold; font-size: 17px; text-transform: lowercase;'> № <span style='color: steelblue; text-transform: uppercase;'>" . $i . "</span></span>";
        $text .= "<br><span style='font-weight: bold; font-size: 17px; text-transform: lowercase;'> АРТИКУЛ <span style='color: steelblue; text-transform: uppercase;'>" . $item['lsid'] . "</span></span>";
        $text .= "<br><span style='font-weight: bold; font-size: 17px; text-transform: lowercase;'> ПОЗИЦИЯ <span style='color: steelblue; text-transform: uppercase;'>" . $item['lsonlyclang'] .' '. $item['lsdlang'] .' '. $item['lsflang'] . "</span></span>";
        // $text .= "<br>D: " . $item['lsdlang'];
        // $text .= "<br>F: " . $item['lsflang'];
        $text .= "<br><span style='font-weight: bold; font-size: 17px; text-transform: lowercase;'> СТОИМОСТЬ <span style='color: steelblue; text-transform: lowercase;'>" . $item['lsprice'] . "</span></span>";
        $text .= "<br><span style='font-weight: bold; font-size: 17px; text-transform: lowercase;'> КОЛИЧЕСТВО <span style='color: steelblue; text-transform: lowercase;'>" . $item['lsquantity'] . "</span></span>";
        $text .= "<br><span style='font-weight: bold; font-size: 17px; text-transform: lowercase;'> СУММА <span style='color: steelblue; text-transform: lowercase;'>" . $item['lssum'] . "</span></span><br>";
        $i++;
    }

    // foreach ($datalocalstogare as $item) {
    //     $text .= "<br><span style='font-weight: bold; font-size: 17px;'>№ <span style='color: red;'>" . $i . "</span></span>";
    //     $text .= "<br>АРТИКУЛ" . $item['lsid'];
    //     $text .= "<br>C: " . $item['lsonlyclang'];
    //     $text .= "<br>D: " . $item['lsdlang'];
    //     $text .= "<br>F: " . $item['lsflang'];
    //     $text .= "<br>Цена: " . $item['lsprice'];
    //     $text .= "<br>Количество: " . $item['lsquantity'];
    //     $text .= "<br>Сумма: " . $item['lssum'] . "<br>";
    //     $i++;
    // }




    $transport = (new Swift_SmtpTransport('smtp.gmail.com', 465, 'ssl'))
        ->setUsername ('sima.zp.biz@gmail.com')
        ->setPassword ('mvdmhlrdxtnjkzyh');

    // Создаем объект Swift Mailer с указанным транспортом
    $mailer = new Swift_Mailer($transport);

    // Создаем объект сообщения
    $message = (new Swift_Message($subject))
         // Устанавливаем отправителя (первый email)
        ->setFrom(['sima.zp.biz@gmail.com'])
        // Устанавливаем получателей, (добавляем второй email)
        ->setTo(['sima.zp.biz@gmail.com', $email_bf])
        // Устанавливаем текст сообщения и его формат
        ->setBody($text, 'text/html');



    // if(!$mailer->send($message)) // Участок 3
    // {
    //     $servReturn = json_encode(array('text' => 'Can\'t send mail! Please check your PHP mail settings.'));
    //     die($servReturn);
    // } else {
    //     $servReturn = json_encode(array('text' => 'Thank you! Your message has been sent.'));
    //     die($servReturn);
    // }

    $result = $mailer->send($message);
    if ($result === false) {
        // Произошла ошибка при отправке сообщения
        // $errorMessage = 'Can\'t send mail! Please check your PHP mail settings.';
        $errorMessage = 'Не удается отправить почту! Пожалуйста, проверьте настройки почты PHP.';
        // Дополнительно можно залогировать ошибку или предпринять другие действия
    } elseif ($result > 0) {
        // Сообщение было успешно отправлено определенному количеству получателей
        // $successMessage = 'Thank you! Your message has been sent to ' . $result . ' recipient(s).';
        $successMessage = 'Сообщение успешно отправлено на ' . $result . ' email(s) адреса ***********@gmail.com , ' . $email_bf . '.';
        // Возможно, вам также нужно выполнить дополнительные действия при успешной отправке
    } else {
        // Метод send() вернул 0, что означает, что сообщение было отправлено, но не было доставлено ни одному получателю
        // $successMessage = 'Message sent, but not delivered to any recipient.';
        $successMessage = 'Сообщение отправлено, но не доставлено ни одному получателю.';
    }

    // Возвращаем сообщение об успешной отправке или ошибке
    if (isset($errorMessage)) {
        $servReturn = json_encode(array('text' => $errorMessage));
        die($servReturn);
    } elseif (isset($successMessage)) {
        $servReturn = json_encode(array('text' => $successMessage));
        die($servReturn);
    }

}

?>