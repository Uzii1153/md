// GATAU MALES BACA

"use strict";
const axios = require("axios");
const spin = require('spinnies')

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

const spinner = { 
  "interval": 120,
  "frames": [
    "",
    "𝗕",
    "𝗕𝗬",
    "𝗕𝗬 ",
    "𝗕𝗬 ∶",
    "𝗕𝗬 ∶ ",
    "𝗕𝗬 ∶ メ",
    "𝗕𝗬 ∶ メ𝗔",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 ",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜 ",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽",
            "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍⁴̵",
            "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅⁰͍",
                "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ⁴̅",
                    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜  ",
                        "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜 ",
                            "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭𝗜",
                                "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨𝗭",
                                    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔𝗨",
                                        "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙𝗔",
                                            "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 𝗙",
                                                "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜 ",
                                                    "𝗕𝗬 ∶ メ𝗔𝗟𝗗𝗜",
                                                        "𝗕𝗬 ∶ メ𝗔𝗟",
                                                            "𝗕𝗬 ∶ メ𝗔",
                                                                "𝗕𝗬 ∶ メ",
                                                                    "𝗕𝗬 ∶ ",
                                                                        "𝗕𝗬 ∶",
                                                                            "𝗕𝗬 ",
                                                                                "𝗕𝗬",
                                                                                    "𝗕",
                                                                                        ""

  ]}
let globalSpinner;
var getGlobalSpinner = (disableSpins = false) => {
  if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
  return globalSpinner;
}
var spans = getGlobalSpinner(false);
var forks = (id, text) => {
	spans.add(id, {text: text});
	};


const start = (id, text) => {
	spans.add(id, {text: text});
	};
const info = (id, text) => {
	spans.update(id, {text: text});
};
const success = (id, text) => {
  	spans.succeed(id, {text: text});

	};

const close = (id, text) => {
	spans.fail(id, {text: text});
};



module.exports = { forks, getBuffer, start, info, success, close }