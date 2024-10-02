import { Col, Container, Row } from "react-bootstrap";
import rating from "../../assets/img/rating.svg"
import { Link } from "react-router-dom";

export default function RettingSection() {
    const ratingitem = [
        {
            icon: rating
        },
        {
            icon: rating
        },
        {
            icon: rating
        },
        {
            icon: rating
        },
        {
            icon: rating
        },
    ]
    return (
        <div className="rating">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={10} lg={8}>
                        <div className="rating-area d-flex flex-wrap align-items-center justify-content-center gap-2 gap-md-3">
                            <p>Check out our <span>2,415 reviews</span></p>
                            <div className="d-flex align-items-center gap-1">
                                {ratingitem.map((itemm, idx) => (
                                    <div key={idx} className="rating-icon">
                                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.158936 26.9489H26.9383V0.198364H0.158936V26.9489Z" fill="currentColor" />
                                            <path d="M22.9877 11.5795L7.79879 22.6015L10.0152 15.7895L4.21338 11.5795H11.3847L13.6006 4.76709L15.8165 11.5795H22.9877ZM13.6011 18.3919L17.7492 17.5203L19.402 22.6015L13.6011 18.3919Z" fill="white" />
                                        </svg>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="116" height="29" viewBox="0 0 116 29" fill="none">
                                    <path d="M30.2553 10.5322H41.8809V12.6891H37.3097V24.8138H34.796V12.6891H30.2451V10.5322H30.2553ZM41.3843 14.473H43.533V16.4686H43.5736C43.6445 16.1864 43.7763 15.9143 43.9689 15.6522C44.1614 15.3902 44.3946 15.1382 44.6682 14.9266C44.9419 14.7048 45.246 14.5335 45.5804 14.3924C45.9149 14.2614 46.2595 14.1908 46.6042 14.1908C46.8677 14.1908 47.0603 14.2009 47.1616 14.211C47.263 14.221 47.3643 14.2412 47.4758 14.2513V16.4484C47.3137 16.4182 47.1515 16.398 46.9792 16.3779C46.8069 16.3577 46.6447 16.3477 46.4825 16.3477C46.0974 16.3477 45.7325 16.4283 45.3879 16.5795C45.0433 16.7306 44.7493 16.9625 44.4959 17.2547C44.2425 17.5571 44.0398 17.9199 43.8878 18.3634C43.7357 18.8069 43.6648 19.3108 43.6648 19.8853V24.8037H41.3741V14.473L41.3843 14.473ZM58.0068 24.8138H55.7567V23.3725H55.7162C55.4324 23.8966 55.0168 24.3098 54.4593 24.6223C53.9019 24.9347 53.3343 25.096 52.7565 25.096C51.3882 25.096 50.3949 24.7634 49.7868 24.0881C49.1786 23.4128 48.8746 22.3949 48.8746 21.0343V14.473H51.1652V20.8125C51.1652 21.7196 51.3375 22.3647 51.6923 22.7376C52.0369 23.1105 52.5335 23.302 53.162 23.302C53.6485 23.302 54.0438 23.2314 54.3681 23.0802C54.6925 22.9291 54.956 22.7376 55.1486 22.4856C55.3513 22.2437 55.4932 21.9413 55.5844 21.5987C55.6756 21.256 55.7162 20.8831 55.7162 20.4799V14.4831H58.0068V24.8138ZM61.9091 21.4979C61.98 22.1631 62.2334 22.6267 62.6693 22.8988C63.1152 23.1609 63.6423 23.302 64.2606 23.302C64.4734 23.302 64.7167 23.2818 64.9903 23.2516C65.264 23.2213 65.5275 23.1508 65.7606 23.0601C66.0039 22.9694 66.1965 22.8283 66.3587 22.6469C66.5107 22.4654 66.5816 22.2336 66.5715 21.9413C66.5614 21.6491 66.4499 21.4072 66.2472 21.2258C66.0444 21.0343 65.7911 20.8932 65.4768 20.7722C65.1626 20.6613 64.8079 20.5606 64.4025 20.4799C63.997 20.3993 63.5916 20.3086 63.176 20.2179C62.7503 20.1272 62.3348 20.0062 61.9395 19.8752C61.5442 19.7442 61.1894 19.5628 60.8752 19.331C60.561 19.1092 60.3076 18.8169 60.1252 18.4642C59.9326 18.1114 59.8414 17.678 59.8414 17.154C59.8414 16.5895 59.9833 16.1259 60.257 15.7429C60.5306 15.3599 60.8854 15.0576 61.3009 14.8258C61.7266 14.594 62.1929 14.4327 62.7098 14.3319C63.2267 14.2412 63.7234 14.1908 64.1896 14.1908C64.7268 14.1908 65.2437 14.2513 65.7302 14.3621C66.2168 14.473 66.6627 14.6544 67.058 14.9165C67.4533 15.1684 67.7777 15.501 68.0412 15.9042C68.3047 16.3073 68.4669 16.8012 68.5378 17.3757H66.1458C66.0343 16.8314 65.7911 16.4585 65.3958 16.2771C65.0005 16.0856 64.5444 15.9949 64.0376 15.9949C63.8754 15.9949 63.6828 16.005 63.4598 16.0352C63.2369 16.0654 63.0341 16.1158 62.8314 16.1864C62.6388 16.2569 62.4767 16.3678 62.3348 16.5089C62.203 16.65 62.1321 16.8314 62.1321 17.0632C62.1321 17.3455 62.2334 17.5672 62.426 17.7385C62.6186 17.9099 62.872 18.051 63.1862 18.1719C63.5004 18.2828 63.8551 18.3836 64.2606 18.4642C64.666 18.5448 65.0816 18.6355 65.5073 18.7262C65.9228 18.8169 66.3282 18.9379 66.7337 19.0689C67.1391 19.1999 67.4939 19.3814 67.8081 19.6132C68.1223 19.845 68.3757 20.1272 68.5682 20.4699C68.7608 20.8125 68.8622 21.2459 68.8622 21.7499C68.8622 22.3647 68.7203 22.8787 68.4365 23.3121C68.1527 23.7354 67.7878 24.0881 67.3418 24.3502C66.8958 24.6122 66.3891 24.8138 65.8417 24.9347C65.2944 25.0557 64.7471 25.1161 64.2099 25.1161C63.5511 25.1161 62.9429 25.0456 62.3855 24.8944C61.828 24.7432 61.3415 24.5215 60.9361 24.2292C60.5306 23.9269 60.2063 23.5539 59.9732 23.1105C59.74 22.667 59.6184 22.1328 59.5981 21.518H61.9091V21.4979ZM69.4703 14.473H71.2035V11.3688H73.4942V14.473H75.5619V16.1763H73.4942V21.6995C73.4942 21.9414 73.5043 22.1429 73.5246 22.3243C73.5449 22.4957 73.5955 22.6469 73.6665 22.7678C73.7374 22.8888 73.8489 22.9795 74.001 23.0399C74.153 23.1004 74.3456 23.1306 74.6091 23.1306C74.7713 23.1306 74.9335 23.1306 75.0956 23.1206C75.2578 23.1105 75.42 23.0903 75.5821 23.05V24.8138C75.3288 24.844 75.0754 24.8642 74.8422 24.8944C74.599 24.9247 74.3557 24.9347 74.1023 24.9347C73.4942 24.9347 73.0077 24.8743 72.6428 24.7634C72.2779 24.6525 71.984 24.4812 71.7813 24.2595C71.5684 24.0377 71.4366 23.7656 71.3556 23.433C71.2846 23.1004 71.2339 22.7174 71.2238 22.2941V16.1965H69.4906V14.473H69.4703ZM77.1836 14.473H79.3526V15.874H79.3932C79.7175 15.2692 80.1635 14.8459 80.7412 14.5839C81.319 14.3218 81.9372 14.1908 82.6163 14.1908C83.4373 14.1908 84.1468 14.3319 84.755 14.6242C85.3631 14.9064 85.8699 15.2995 86.2753 15.8034C86.6808 16.3073 86.9747 16.8919 87.1774 17.5571C87.3801 18.2223 87.4815 18.9379 87.4815 19.6938C87.4815 20.3892 87.3902 21.0645 87.2078 21.7095C87.0254 22.3647 86.7517 22.9391 86.3868 23.4431C86.0219 23.947 85.5557 24.3401 84.9881 24.6424C84.4205 24.9448 83.7617 25.096 82.9914 25.096C82.6569 25.096 82.3224 25.0658 81.9879 25.0053C81.6534 24.9448 81.3291 24.844 81.025 24.713C80.721 24.582 80.427 24.4106 80.1736 24.199C79.9101 23.9873 79.6972 23.7454 79.5148 23.4733H79.4743V28.6336H77.1836V14.473ZM85.1908 19.6535C85.1908 19.1899 85.13 18.7363 85.0084 18.2929C84.8867 17.8494 84.7043 17.4664 84.461 17.1237C84.2178 16.781 83.9137 16.5089 83.559 16.3073C83.1941 16.1058 82.7785 15.9949 82.3123 15.9949C81.3494 15.9949 80.6196 16.3275 80.1331 16.9927C79.6466 17.6579 79.4033 18.5448 79.4033 19.6535C79.4033 20.1776 79.4641 20.6613 79.5959 21.1048C79.7277 21.5483 79.9101 21.9313 80.1736 22.2538C80.427 22.5763 80.7311 22.8283 81.0858 23.0097C81.4406 23.2012 81.8562 23.2919 82.3224 23.2919C82.8495 23.2919 83.2853 23.181 83.6502 22.9694C84.0151 22.7577 84.309 22.4755 84.5421 22.1429C84.7752 21.8002 84.9475 21.4173 85.0489 20.9839C85.1401 20.5505 85.1908 20.107 85.1908 19.6535ZM89.235 10.5322H91.5256V12.6891H89.235V10.5322ZM89.235 14.473H91.5256V24.8138H89.235V14.473ZM93.573 10.5322H95.8637V24.8138H93.573V10.5322ZM102.888 25.096C102.057 25.096 101.317 24.9549 100.668 24.6828C100.019 24.4106 99.472 24.0276 99.0159 23.5539C98.5699 23.0702 98.2253 22.4957 97.9922 21.8305C97.7591 21.1653 97.6375 20.4295 97.6375 19.6333C97.6375 18.8472 97.7591 18.1215 97.9922 17.4563C98.2253 16.7911 98.5699 16.2166 99.0159 15.7329C99.4619 15.2491 100.019 14.8762 100.668 14.604C101.317 14.3319 102.057 14.1908 102.888 14.1908C103.719 14.1908 104.459 14.3319 105.107 14.604C105.756 14.8762 106.303 15.2592 106.76 15.7329C107.206 16.2166 107.55 16.7911 107.783 17.4563C108.016 18.1215 108.138 18.8472 108.138 19.6333C108.138 20.4295 108.016 21.1653 107.783 21.8305C107.55 22.4957 107.206 23.0702 106.76 23.5539C106.314 24.0377 105.756 24.4106 105.107 24.6828C104.459 24.9549 103.719 25.096 102.888 25.096ZM102.888 23.2919C103.395 23.2919 103.841 23.181 104.216 22.9694C104.591 22.7577 104.895 22.4755 105.138 22.1328C105.381 21.7902 105.553 21.3971 105.675 20.9637C105.787 20.5303 105.847 20.0869 105.847 19.6333C105.847 19.1899 105.787 18.7565 105.675 18.313C105.564 17.8695 105.381 17.4866 105.138 17.1439C104.895 16.8012 104.591 16.5291 104.216 16.3174C103.841 16.1058 103.395 15.9949 102.888 15.9949C102.381 15.9949 101.935 16.1058 101.56 16.3174C101.185 16.5291 100.881 16.8113 100.638 17.1439C100.394 17.4866 100.222 17.8695 100.1 18.313C99.9889 18.7565 99.9281 19.1899 99.9281 19.6333C99.9281 20.0869 99.9889 20.5303 100.1 20.9637C100.212 21.3971 100.394 21.7902 100.638 22.1328C100.881 22.4755 101.185 22.7577 101.56 22.9694C101.935 23.1911 102.381 23.2919 102.888 23.2919ZM108.807 14.473H110.54V11.3688H112.831V14.473H114.899V16.1763H112.831V21.6995C112.831 21.9414 112.841 22.1429 112.861 22.3243C112.882 22.4957 112.932 22.6469 113.003 22.7678C113.074 22.8888 113.186 22.9795 113.338 23.0399C113.49 23.1004 113.682 23.1306 113.946 23.1306C114.108 23.1306 114.27 23.1306 114.432 23.1206C114.594 23.1105 114.757 23.0903 114.919 23.05V24.8138C114.665 24.844 114.412 24.8642 114.179 24.8944C113.936 24.9247 113.692 24.9347 113.439 24.9347C112.831 24.9347 112.344 24.8743 111.979 24.7634C111.615 24.6525 111.321 24.4812 111.118 24.2595C110.905 24.0377 110.773 23.7656 110.692 23.433C110.621 23.1004 110.571 22.7174 110.56 22.2941V16.1965H108.827V14.473L108.807 14.473Z" fill="#191919" />
                                    <path d="M27.5792 10.5319H17.0786L13.8352 0.594727L10.5817 10.5319L0.0810547 10.5219L8.58492 16.6696L5.33135 26.5968L13.8352 20.4591L22.3289 26.5968L19.0855 16.6696L27.5792 10.5319Z" fill="#00B67A" />
                                    <path d="M19.8153 18.9176L19.0855 16.67L13.8352 20.4596L19.8153 18.9176Z" fill="#005128" />
                                </svg>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="rating-btn py-4 w-100">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} md={8} lg={6} xl={5}>
                            <div className="rating-btn-area text-center">
                                <Link to="/" className="btn d-block mx-auto">Start trading now</Link>
                                <p className="pt-2 pb-2 md:mt-1 md:mb-1 fw-medium or">or</p>
                                <Link to="/" className="p">practice on a demo account</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
