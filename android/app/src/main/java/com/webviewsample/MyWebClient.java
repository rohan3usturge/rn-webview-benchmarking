package com.webviewsample;

import android.content.Context;
import android.graphics.Bitmap;
import android.os.Bundle;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.google.firebase.analytics.FirebaseAnalytics;

import org.joda.time.Instant;
import org.joda.time.Interval;

public class MyWebClient extends WebViewClient {

    private Context context;
    private Instant _startDate;

    public MyWebClient(Context context) {
        this.context = context;
    }

    @Override
    public void onPageStarted(WebView view, String url, Bitmap favicon) {
        this._startDate = new Instant();
        super.onPageStarted(view, url, favicon);
    }

    @Override
    public void onPageFinished(WebView view, String url) {
        super.onPageFinished(view, url);
        Interval interval = new Interval(this._startDate, new Instant());
        Bundle bundle = new Bundle();
        String diff = Long.toString(interval.toDurationMillis());
        bundle.putString("duration", diff);
        FirebaseAnalytics.getInstance(this.context).logEvent("cart_webview_android_load_complete", bundle);
    }
}
