#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

int main(){
    int T = 0;
    vector< vector<int> > data;
    vector<int> ns;
    vector<int> maxs;
    vector<int> results;
    cin >> T;
    for(int i=0;i<T;i++){
        int nextMax =0,nextn=0;
        cin >> nextn;
        cin >> nextMax;
        ns.push_back(nextn);
        maxs.push_back(nextMax);

        vector<int> nextdata;
        for(int j=0;j<nextn;j++){
            int nexti=0;
            cin >> nexti;
            nextdata.push_back(nexti);
        }
        data.push_back(nextdata);
    }


    for(int i=0;i<T;i++){
        int n = ns[i], max = maxs[i];
        sort(data[i].begin(), data[i].end());
        int tracking = 0, re=0;
        for(int j=0;j<n;j++){
            if(data[i][j] + tracking <= max){
                re++;
                tracking += data[i][j];
            }
            else{
                break;
            }
        }
        results.push_back(re);
    }

    for(int i=0;i<results.size();i++){
        cout << "Case #1: " << results[i] << endl;
    }

    return 0;
}