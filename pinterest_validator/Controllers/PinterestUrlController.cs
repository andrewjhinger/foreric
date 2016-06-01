using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Web.Http;

namespace pinterest_validator.Controllers
{
    public class PinterestUrlController : ApiController
    {
        const string baseUrl = "https://www.pinterest.com/";
        const string promoCode = "PINTEN";
        const string storeText = "factorymade";
        //ahinger/healthy-lifestyle
        // GET api/values/5
        [System.Web.Mvc.HttpGet]
        public string Get(string user, string board)
        {
            if (user != null && board != null)
            {
                try
                {
                    var pinterestUrl = baseUrl + "/" + user + "/" + board;
                    var client = new WebClient();
                    string html = client.DownloadString(pinterestUrl);
                    var factoryMadeCount = Regex.Matches(html, storeText).Count;
                    if (factoryMadeCount >= 10)
                    {
                        return promoCode;
                    }
                }
                catch
                {
                    return null;
                }
                return null;
            }
            return null;
        }
    }
}
