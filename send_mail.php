
<?php
// if($_POST)
if($_SERVER['REQUEST_METHOD'] == 'POST') // Участок 1
{
    require_once 'vendor/autoload.php';

    $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_STRING);
    $phone = filter_var($_POST["phone"], FILTER_SANITIZE_STRING);
    $message_text = filter_var($_POST["message"], FILTER_SANITIZE_STRING);

    // $subject = 'Message to http://sima-biz.rf.gd from '.$_POST["name"];
    $subject = 'Сообщение с сайта http://sima-biz.rf.gd от '.$_POST["name"];
    // $subject = 'Stay in touch '.$_POST["name"];
    // $subject = 'Message to https://sima.us.to from '.$_POST["name"];
    // $text = "Name: ".$name.". Email Address: ".$email ." Phone:". $phone ." Message:". $message_text;
    $text = 
    "<br /><span style='font-weight: bold; font-size: 17px; text-transform: lowercase;'> NAME  </span><span style='font-weight: bold; font-size: 17px; color: blue; text-transform: capitalize;'>". $name . "</span>" .
    "<br /><span style='font-weight: bold; font-size: 17px; text-transform: lowercase;'> EMAIL  </span><span style='font-weight: bold; font-size: 17px; color: blue; text-transform: none;'>". $email . "</span>" .
    "<br /><span style='font-weight: bold; font-size: 17px; text-transform: lowercase;'> PHONE  </span><span style='font-weight: bold; font-size: 17px; color: blue; text-transform: uppercase;'>". $phone . "</span>" .
    "<br /><span style='font-weight: bold; font-size: 17px; text-transform: lowercase;'> MESSAGE  </span><span style='font-weight: bold; font-size: 17px; color: blue; text-transform: none'>". $message_text . "</span>";
    // "<br />  NAME :   ". $name .
    // "<br />  EMAIL :   ". $email .
    // "<br />  PHONE :   ". $phone .
    // "<br />  <br />". $message_text;


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
        ->setTo(['sima.zp.biz@gmail.com', $email])
        // Устанавливаем текст сообщения и его формат
        ->setBody($text, 'text/html');

    
    // if(isset($_FILES['file'])){
    //     $files = $_FILES['file'];
    //     foreach($files as $key => $tmp_name){
    //         if(!empty($tmp_name)){
    //             foreach($tmp_name as $k => $v) {
    //                     $file_name = $files['name'][$k];
    //                     $file_tmp = $files['tmp_name'][$k];
    //                     $message->attach(Swift_Attachment::fromPath($file_tmp)->setFilename($file_name));
    //             }
    //         }
    //     }
    // }



    // Проверяем, существует ли массив файлов с именем 'file' в массиве $_FILES
    if(isset($_FILES['file'])){ // Участок 2: Проверка наличия выбранных файлов
        // Сохраняем содержимое массива файлов в переменной $files
        $files = $_FILES['file'];
        // Для каждого файла в массиве $files['tmp_name'] выполняем следующее:
        foreach($files['tmp_name'] as $key => $tmp_name){
            // Проверяем, что путь к временному файлу не пустой (не пустая строка)
            if(!empty($tmp_name)){
                // Получаем имя файла из массива $files['name'][$key]
                $file_name = $files['name'][$key];
                // Сохраняем путь к временному файлу в переменной $file_tmp
                $file_tmp = $tmp_name;
                // Создаем вложение с использованием класса Swift_Attachment из временного файла
                // Устанавливаем имя файла на основе значения из массива $files['name'][$key]
                $message->attach(Swift_Attachment::fromPath($file_tmp)->setFilename($file_name));
            }
        }
    }



    // if(!$mailer->send($message))
    // {
    //     $servReturn = json_encode(array('text' => 'Can\'t send mail! Please check your PHP mail settings.'));
    //     die($servReturn);
    // } else {
    //     $servReturn = json_encode(array('text' => 'Thank you! Your message has been sent.'));
    //     die($servReturn);
    // }

    $result = $mailer->send($message);  // Участок 3
    if ($result === false) {
        // Произошла ошибка при отправке сообщения
        // $errorMessage = 'Can\'t send mail! Please check your PHP mail settings.';
        $errorMessage = 'Не удается отправить почту! Пожалуйста, проверьте настройки почты PHP.';
        // Дополнительно можно залогировать ошибку или предпринять другие действия
    } elseif ($result > 0) {
        // Сообщение было успешно отправлено определенному количеству получателей
        // $successMessage = 'Thank you! Your message has been sent to ' . $result . ' recipient(s).';
        $successMessage = 'Сообщение успешно отправлено на ' . $result . ' email(s) адреса ***********@gmail.com , ' . $email . '.';
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
