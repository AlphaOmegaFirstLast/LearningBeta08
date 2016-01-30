namespace WebBasics.SystemModels
{

    /// <remarks/>
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    [System.Xml.Serialization.XmlRootAttribute(Namespace = "", IsNullable = false)]
    public partial class EndPoints
    {
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute("EndPoint")]
        public EndPointsEndPoint[] EndPointsEndPoint { get; set; }
    }

    /// <remarks/>
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class EndPointsEndPoint
    {
        /// <remarks/>
        public string ApiMethod { get; set; }

        /// <remarks/>
        public string Headers { get; set; }

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public string Name { get; set; }

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public string CacheKey { get; set; }

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public int CacheTimeMin { get; set; }

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public bool GetFromCache { get; set; }

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public string HttpMethod { get; set; }

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public bool IsCacheSerialized { get; set; }
    }



}
