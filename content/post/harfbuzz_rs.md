+++
title: "Harfbuzz_rs"
date: 2018-03-01T18:43:29+01:00
draft: true
+++

In this blogpost I'm going to share my experiences while trying to develop some rusty and safe bindings for HarfBuzz. Before jumping into the code side of things I want to give a brief outline of what HarfBuzz does.

# Creating Bindings in Rust

It would be quite tedious to create the basic bindings for all these HarfBuzz functions and types by hand, so to create the low-level bindings [rust-bindgen][bindgen] was used. Actually on [crates.io](https://crates.io) there [already exists][hb-sys] a harfbuzz-sys crate exposing the raw C interface. However the version of harfbuzz exposed there a bit old and doesn't include the [new OpenType MATH table functionality][hb-math] implemented in a recent HarfBuzz release. I want to use the HarfBuzz library for implementing a mathematical layout application, so it makes things easier to rely on HarfBuzz for the low-level details.