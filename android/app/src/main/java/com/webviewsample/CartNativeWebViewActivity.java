package com.webviewsample;

import androidx.appcompat.app.AppCompatActivity;

import android.graphics.Bitmap;
import android.os.Bundle;
import android.webkit.WebResourceRequest;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.google.firebase.analytics.FirebaseAnalytics;

import io.invertase.firebase.analytics.UniversalFirebaseAnalyticsModule;

public class CartNativeWebViewActivity extends AppCompatActivity {

    WebView myWebView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cart_native_web_view);
        myWebView = (WebView) findViewById(R.id.cartNativeWebView);
        WebViewClient webViewClient = new MyWebClient(this);
        myWebView.getSettings().setJavaScriptEnabled(true);
        myWebView.setWebViewClient(webViewClient);
        myWebView.loadUrl("https://walmart.ca/cart");
    }
}
