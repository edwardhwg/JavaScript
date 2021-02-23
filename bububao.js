
                    } = t;
1868
                    e(s, i, i && i.body)
1869
                })
1870
            }
1871
        }
1872
        time(t) {
1873
            let e = {
1874
                "M+": (new Date).getMonth() + 1,
1875
                "d+": (new Date).getDate(),
1876
                "H+": (new Date).getHours(),
1877
                "m+": (new Date).getMinutes(),
1878
                "s+": (new Date).getSeconds(),
1879
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
1880
                S: (new Date).getMilliseconds()
1881
            };
1882
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + ``).substr(4 - RegExp.$1.length)));
1883
            for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr((`` + e[s]).length)));
1884
            return t
1885
        }
1886
        msg(e = t, s = ``, i = ``, r) {
1887
            const o = t => {
1888
                if (!t) return t;
1889
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
1890
                    "open-url": t
1891
                } : this.isSurge() ? {
1892
                    url: t
1893
                } : void 0;
1894
                if ("object" == typeof t) {
1895
                    if (this.isLoon()) {
1896
                        let e = t.openUrl || t.url || t["open-url"],
1897
                            s = t.mediaUrl || t["media-url"];
1898
                        return {
1899
                            openUrl: e,
1900
                            mediaUrl: s
1901
                        }
1902
                    }
1903
                    if (this.isQuanX()) {
1904
                        let e = t["open-url"] || t.url || t.openUrl,
1905
                            s = t["media-url"] || t.mediaUrl;
1906
                        return {
1907
                            "open-url": e,
1908
                            "media-url": s
1909
                        }
1910
                    }
1911
                    if (this.isSurge()) {
1912
                        let e = t.url || t.openUrl || t["open-url"];
1913
                        return {
1914
                            url: e
1915
                        }
1916
                    }
1917
                }
1918
            };
1919
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
1920
            let h = [``, "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
1921
            h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
1922
        }
1923
        log(...t) {
1924
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
1925
        }
1926
        logErr(t, e) {
1927
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
1928
            s ? this.log(``, `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log(``, `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
1929
        }
1930
        wait(t) {
1931
            return new Promise(e => setTimeout(e, t))
1932
        }
1933
        done(t = {}) {
1934
            const e = (new Date).getTime(),
1935
                s = (e - this.startTime) / 1e3;
1936
            this.log(``, `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
1937
        }
1938
    }(t, e)
1939
}
1940
