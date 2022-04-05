import React, { useState, useEffect, useRef } from "react";
import Script from 'next/script'
import dynamic from 'next/dynamic'



const Page = () => {
  const zoomRef = useRef(null);
  const [show, showFunc] = useState(false);

  const [zoomMtg, setZoomMtg] = useState(null)
  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        const { ZoomMtg } = (await import('@zoomus/websdk'));
        console.log(ZoomMtg)
        setZoomMtg(ZoomMtg)
        ZoomMtg.generateSDKSignature({
          meetingNumber: "81577028604",
          sdkKey: "XxJeAhd3tEya7ktCouQvPinuKftDbSfotVRC",
          sdkSecret: "YYDmGkOQfwkei0UYUfspIsJvP0w3TZnZk1dH",
          role: "0",
          success: function (res) {
            console.log(res.result);
            // meetingConfig.signature = res.result;
            // meetingConfig.sdkKey = SDK_KEY;
            // const joinUrl =
            //   testTool.getCurrentDomain() +
            //   "/meeting.html?" +
            //   testTool.serialize(meetingConfig);
            // document.getElementById('copy_link_value').setAttribute('link', joinUrl);
            // copyToClipboard('copy_link_value');
          },
        });
      }
    })()
  }, [])

  return (
    <>
      <link
        type="text/css"
        rel="stylesheet"
        href="https://source.zoom.us/2.3.5/css/bootstrap.css"
      />
      <link
        type="text/css"
        rel="stylesheet"
        href="https://source.zoom.us/2.3.5/css/react-select.css"
      />

      <Script src="https://source.zoom.us/2.3.5/lib/vendor/react.min.js" strategy="beforeInteractive" />
      <Script src="https://source.zoom.us/2.3.5/lib/vendor/react-dom.min.js" strategy="beforeInteractive" />
      <Script src="https://source.zoom.us/2.3.5/lib/vendor/redux.min.js" strategy="beforeInteractive" />
      <Script src="https://source.zoom.us/2.3.5/lib/vendor/redux-thunk.min.js" strategy="beforeInteractive" />
      <Script src="https://source.zoom.us/2.3.5/lib/vendor/lodash.min.js" strategy="beforeInteractive" />

      <div id="”meetingSDKElement”" ref={zoomRef} />

    </>
  )
}

export default Page;