import styled from "styled-components";

export const LoaderContainer = styled.div`
display: flex;
align-items: flex-end;
justify-content: center;
.overlay {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    background: #00000080;
    z-index: 9999;
}

.overlay__inner {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
}

.overlay__content {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
}


border-color: #ed1c24 transparent #ed1c24 transparent;

.loading-spinner {
    width: 75px;
    height: 75px;
    display: inline-block;
    border-width: 3px;
    border-color: #1976d2 transparent #1976d2 transparent;
    border-top-color: #fff;
    animation: spin 1s infinite linear;
    border-radius: 100%;
    border-style: solid;
}

@keyframes spin {
    100% {
        transform: rotate(360deg);
    }
}
`