let MESSAGE_LIST = [
    "TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdA==",
    "U2VkIGluIGNvbnNlY3RldHVyIGxvcmVt",
    "Q3VyYWJpdHVyIGNvbmd1ZSBpcHN1bSBhYyBtaSBsYW9yZWV0IGZhY2lsaXNpcw==",
    "RG9uZWMgcG9ydHRpdG9yLCBhbnRlIHNlZCBlbGVtZW50dW0gYWxpcXVldCwgdGVsbHVzIGVyYXQgdWx0cmljZXMgaXBzdW0sIGFjIHNlbXBlciBqdXN0byBsaWJlcm8gZXQganVzdG8=",
    "UHJvaW4gZWxlaWZlbmQgZmVsaXMgbmVjIG5lcXVlIGxhY2luaWEgZmFjaWxpc2lz",
    "UGVsbGVudGVzcXVlIG9ybmFyZSBpbXBlcmRpZXQgc2VtLCBzaXQgYW1ldCB2b2x1dHBhdCBsZWN0dXMgZGlnbmlzc2ltIGE=",
    "SW50ZWdlciBldWlzbW9kLCBsZWN0dXMgdXQgbHVjdHVzIG1hbGVzdWFkYSwganVzdG8gdGVsbHVzIGxhY2luaWEgb3JjaSwgZWdldCBjdXJzdXMgbG9yZW0gZXggZmVybWVudHVtIG1hZ25h",
    "TnVuYyBncmF2aWRhIGxlbyBpbiBpcHN1bSB0cmlzdGlxdWUsIHBlbGxlbnRlc3F1ZSBmYXVjaWJ1cyBhcmN1IGJpYmVuZHVt",
    "U2VkIGx1Y3R1cyBpbXBlcmRpZXQgZXJhdCBzaXQgYW1ldCB0ZW1wdXM=",
    "Q3JhcyB2YXJpdXMgYmxhbmRpdCB0dXJwaXMsIG5vbiBwb3N1ZXJlIGRpYW0gY29uZGltZW50dW0gZXQ=",
    "Q3JhcyBub24gbnVuYyBxdWlzIG1pIGxhb3JlZXQgcmhvbmN1cyB2aXRhZSBhYyBmZWxpcw==",
    "Vml2YW11cyBibGFuZGl0LCBxdWFtIHF1aXMgZGFwaWJ1cyB0ZW1wdXMsIG5pYmggbnVuYyBncmF2aWRhIGVsaXQsIGlkIG1hbGVzdWFkYSB2ZWxpdCBtZXR1cyBhYyBuZXF1ZQ==",
    "UHJvaW4gYSBsZWN0dXMgaW4gc2VtIGFsaXF1YW0gZmluaWJ1cw==",
    "SW50ZWdlciBmYWNpbGlzaXMgdHVycGlzIG1hc3NhLCBpZCBtYXR0aXMgZXJhdCB0cmlzdGlxdWUgaW4="
]

window.onload = function get_text() {
    MESSAGE_LIST.forEach(str => place_text(str));
}

function place_text(text) {
    /*TODO: Matrix-like text scrolling.
      Requirements:
        Takes entire string.
        String is placed vertically on screen.
        String moves from top of screen to bottom.
        Location on screen is random.
        Size on screen is random.
      (Optional):
        Depending on size, change color to other, darker, matrix colors.
    */
}