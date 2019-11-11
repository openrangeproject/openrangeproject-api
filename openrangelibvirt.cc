#include <libvirt/libvirt.h>
#include <node.h>
#include <string.h>


namespace demo {

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::Value;
using v8::String;
using v8::Primitive;
using v8::Exception;
using v8::NewStringType;
const char* NUM_ARGS_ERROR = "Error: Number of Arguments is wrong";

// Make sure we are getting the correct number of argument and throw
// an exception if not.
bool argsLengthFail(Isolate* isolate, int requires, int has, const char* msg){
    if (has != requires){
        isolate->ThrowException(Exception::TypeError(
            String::NewFromUtf8(isolate, msg, NewStringType::kNormal).ToLocalChecked()));
        return true;
    }
    return false;
}

// Returns a connection to libvirt
virConnectPtr connect(Isolate* isolate, Local<Value> x){
    String::Utf8Value str(isolate, x);
    char* connString = *str;
    return virConnectOpen(connString);
}

// Handles libvirt requests from Nodejs
void libvirtDo(const FunctionCallbackInfo<Value>& args){
    Isolate* isolate = args.GetIsolate();
    String::Utf8Value str(isolate, args[0]);
    char* lvDo = *str;
    virConnectPtr conn = connect(isolate, args[1]);

    // Map input from Nodejs to an action with libvirt. It's best to 
    // keep it one-to-one and follow libvirts naming convention. Complex
    // interactions should happen on the Nodejs side.
    if (strcmp(lvDo, "virConnectNumOfDomains") == 0) {
        if (argsLengthFail(isolate, 2, args.Length(), NUM_ARGS_ERROR)) return;
        args.GetReturnValue().Set(virConnectNumOfDomains(conn));
    } 
    else if (strcmp(lvDo, "virConnectNumOfDefinedDomains") == 0) {
        if (argsLengthFail(isolate, 2, args.Length(), NUM_ARGS_ERROR)) return;
        args.GetReturnValue().Set(virConnectNumOfDefinedDomains(conn));
    } 
    else if (strcmp(lvDo, "virNetworkDefineXML") == 0) {
        if (argsLengthFail(isolate, 3, args.Length(), NUM_ARGS_ERROR)) return;
        String::Utf8Value str(isolate, args[2]);
        char* xmlDesc = *str;
        virNetworkPtr network;
        network = virNetworkCreateXML(conn, xmlDesc);
        if (network == NULL) args.GetReturnValue().Set(true);
        else args.GetReturnValue().Set(true);
    } else if (strcmp(lvDo, "virConnectListAllNetworks") == 0){
        if (argsLengthFail(isolate, 2, args.Length(), NUM_ARGS_ERROR)) return;
        virNetworkPtr **nets;
        args.GetReturnValue().Set(virConnectListAllNetworks(conn, nets, 63));
    }
}

void Init(Local<Object> exports) {
    NODE_SET_METHOD(exports, "libvirtDo", libvirtDo);
}


NODE_MODULE(NODE_GYP_MODULE_NAME, Init)


} // namespace demo