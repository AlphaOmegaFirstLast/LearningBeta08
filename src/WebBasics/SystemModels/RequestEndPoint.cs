namespace WebBasics.SystemModels
{
    public class RequestEndPoint
    {
        public string Name { get; set; }
        public string HttpMethod { get; set; }
        public string Url { get; set; }
        public string CacheKey { get; set; }
        public int CacheTimeMin { get; set; }
        public bool GetFromCache { get; set; }
        public bool IsCacheSerialized { get; set; }
        public string Headers { get; set; }
    }
}