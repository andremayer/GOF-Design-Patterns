class Notification {
    send(message) {
        console.log("Sending notification:", message);
    }
}

class EmailNotification extends Notification {
    send(message) {
        console.log("Sending email notification:", message);
    }
}

class NotificationDecorator extends Notification {
    constructor(notification) {
        super();
        this.notification = notification;
    }

    send(message) {
        this.notification.send(message);
    }
}

class SMSNotificationDecorator extends NotificationDecorator {
    send(message) {
        console.log("Sending SMS notification:", message);
        this.notification.send(message);
    }
}

class SlackNotificationDecorator extends NotificationDecorator {
    send(message) {
        console.log("Sending Slack notification:", message);
        this.notification.send(message);
    }
}

const emailNotification = new EmailNotification();
emailNotification.send("Hello, this is an email notification.");

const smsNotification = new SMSNotificationDecorator(new EmailNotification());
smsNotification.send("Hello, this is an SMS notification sent via email.");

const slackNotification = new SlackNotificationDecorator(new SMSNotificationDecorator(new EmailNotification()));
slackNotification.send("Hello, this is a Slack notification sent via SMS and email.");
