"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import {testimonials} from "@/components/data";

export const Testimonials = () => {
    return (
        <div className="w-full h-full rounded-md flex flex-col antialiased  items-center justify-center relative">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="normal"
                pauseOnHover={false}
            />
        </div>
    );
}


