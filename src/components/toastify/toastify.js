import { toast } from "react-toastify";

const options = {
    hideProgressBar: true,
    position: "top-center",
    autoClose: 3000,
    whiteSpace: 'pre-line'
}

const lastNotificationTimes = {};

export const Success = (message) => {
    if (canShowNotification("success")) {
        toast.success(message, options);
    }
}

export const Error = (message) => {
    if (canShowNotification("error")) {
        toast.error(<div style={{ whiteSpace: 'pre-line' }}>{message}</div>, options);
    }
}

export const Warning = (message) => {
    if (canShowNotification("warning")) {
        toast.warning(<div style={{ whiteSpace: 'pre-line' }}>{message}</div>, options);
    }
}

export const Info = (message) => {
    if (canShowNotification("info")) {
        toast.info(message, options);
    }
}

const canShowNotification = (type) => {
    const currentTime = Date.now();
    const lastTime = lastNotificationTimes[type] || 0;
    const timeSinceLastNotification = currentTime - lastTime;

    if (timeSinceLastNotification >= 3000) {
        lastNotificationTimes[type] = currentTime;
        return true;
    }

    return false;
}
