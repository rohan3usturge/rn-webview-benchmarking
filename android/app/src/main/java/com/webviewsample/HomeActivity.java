package com.webviewsample;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class HomeActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);
    }

    public void goToNativeCartWebView(View view) {
        startActivity(new Intent(this, CartNativeWebViewActivity.class));
    }

    public void goToReactNativeCartWebView(View view) {
        startActivity(new Intent(this, CartRnWebViewActivity.class));
    }
}
