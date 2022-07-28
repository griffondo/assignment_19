const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/budget";
const router = require("express").Router();
const Transaction = require("../models/transaction.js");



router.post("/api/transaction", ({body}, res) => {
    Transaction.create(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });

  router.post("/api/transaction/bulk", ({body}, res) => {
    Transaction.insertMany(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });

  let reversed = transactions.slice().reverse();
  let sum = 0;

  function sendTransaction(isAdding) {
    let nameEl = document.querySelector("#t-name");
    let amountEl = document.querySelector("#t-amount");
    let errorEl = document.querySelector(".form .error");

    if (nameEl.value === "" || amountEl.value === "") {
        errorEl.textContent = "Missing Information";
        return;
      }
      else {
        errorEl.textContent = "";
      }
      