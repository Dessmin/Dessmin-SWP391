package com.swp391.KoiShop.model;

import jakarta.validation.constraints.Email;
import lombok.Data;

@Data
public class ForgotPasswordRequest {
    @Email(message = "Invalid Email!")
    private String email;
}
