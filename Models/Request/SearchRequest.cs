using System;

namespace whale_spotting.Request
{
    public class SearchRequest
    {
        public int Page { get; set; } = 1;
        public int PageSize { get; set; } = 10;
        public virtual string Filters => "";
    }

    public class SightingSearchRequest : SearchRequest
    {
        private string _search;
        public string Search
        {
            get => _search?.ToLower();
            set => _search = value;
        }
        public override string Filters => Search == null ? "" : $"&search={Search}";
        public string Species { get; set; }
        public string Location { get; set; }
        public DateTime? SightedAt { get; set; }
    }
}
